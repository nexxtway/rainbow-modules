import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RenderIf, Tree } from 'react-rainbow-components';
import { Download as DownloadIcon } from '@rainbow-modules/icons';
import { OnResizeParams } from 'layout/src/components/ResizableColumns/types';
import { useIntl } from 'react-intl';
import { CodeViewerProps, DataItem, SelectValue } from './types';
import {
    Container,
    Title,
    Content,
    ControlBar,
    LeftColumn,
    RightColumn,
    StyledResizableColumns,
} from './styled';
import { ShowTree, HideTree, Enlarge, Decrease } from './icons';
import SourceTree from './sourceTree';
import SourceFilePreview from './sourceFilePreview';
import generateTreeNode from './helpers/generateTreeNode';
import getIconForFolder from './helpers/getIconForFolder';
import ActionButton from './actionButton';
import messages from './messages';

const renderComponent = (componentJsx: React.ReactElement, isFullScreenMode: boolean) => {
    if (isFullScreenMode) {
        return createPortal(componentJsx, document.body);
    }
    return componentJsx;
};

const CodeViewer: React.FC<CodeViewerProps> = ({
    icon,
    name,
    onFolderExpand,
    onFileSelect,
    onDownload,
}: CodeViewerProps) => {
    const intl = useIntl();

    const [initialDividerPosition, setIinitialDividerPosition] = useState(250);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSourceTreeVisible, setSourceTreeVisible] = useState(true);
    const [isLoadingTree, setIsLoadingTree] = useState(true);
    const [isLoadingContent, setIsLoadingContent] = useState(false);
    const [treeData, setTreeData] = useState<DataItem[]>([]);
    const [selectedNode, setSelectedNode] = useState<SelectValue & DataItem>();
    const [content, setContent] = useState<string>();

    const selectedNodeName = selectedNode && selectedNode?.name;
    const selectedFilename = selectedNode && selectedNode?.label;

    const handleColumnResize = ({ dividerPosition }: OnResizeParams) =>
        setIinitialDividerPosition(dividerPosition ?? 250);
    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
    const toggleSourceTree = () => setSourceTreeVisible(!isSourceTreeVisible);

    const updateNodeChild = (nodePath: number[], child: DataItem) => {
        const newData = [...treeData];
        newData[nodePath] = child;
        setTreeData(newData);
    };

    const handleNodeExpand = async ({ nodePath }: SelectValue) => {
        if (!onFolderExpand) return;
        const child: DataItem = Tree.getNode(treeData, nodePath);
        if (!child.isExpanded && child.children?.length === 0) {
            child.isLoading = !child.isLoading;
            updateNodeChild(nodePath, child);
            const { path } = child;
            const { files } = await onFolderExpand({ folderPath: path });
            child.children = files.map((entry) => generateTreeNode({ ...entry, path }));
            child.isExpanded = !child.isExpanded;
            child.isLoading = !child.isLoading;
        } else {
            child.isExpanded = !child.isExpanded;
        }
        child.icon = getIconForFolder(child.isExpanded);
        updateNodeChild(nodePath, child);
    };

    const onSelectFile = async (node: SelectValue) => {
        const { name: nodeName, nodePath } = node;
        const child = Tree.getNode(treeData, nodePath);
        if (Array.isArray(child.children)) {
            handleNodeExpand(node);
            return;
        }

        if (!onFileSelect) return;
        setSelectedNode({ name: nodeName, nodePath, ...child });
        setIsLoadingContent(true);
        const { content: fileContent } = await onFileSelect(child);
        setContent(fileContent);
        setIsLoadingContent(false);
    };

    const loadRootFolder = useCallback(async () => {
        if (!onFolderExpand) {
            setTreeData([]);
            setIsLoadingTree(false);
            return;
        }

        const { files } = await onFolderExpand({
            folderPath: '/',
        });
        const data: DataItem[] = files.map((entry) => generateTreeNode({ ...entry, path: '' }));
        setTreeData(data);
        setIsLoadingTree(false);
    }, [onFolderExpand]);

    useEffect(() => {
        loadRootFolder();
    }, [loadRootFolder]);

    const SourceTreeToggleIcon = isSourceTreeVisible ? HideTree : ShowTree;
    const FullScreenToggleIcon = isFullScreen ? Decrease : Enlarge;

    const leftColumn = (
        <LeftColumn isVisible={isSourceTreeVisible}>
            <SourceTree
                icon={icon}
                name={name}
                isLoading={isLoadingTree}
                data={treeData}
                onNodeExpand={handleNodeExpand}
                selectedNode={selectedNodeName}
                onNodeSelect={onSelectFile}
            />
        </LeftColumn>
    );
    const rightColumn = (
        <RightColumn isLoading={isLoadingContent}>
            <SourceFilePreview isLoading={isLoadingContent} content={content} />
        </RightColumn>
    );

    return renderComponent(
        <Container isFullScreen={isFullScreen}>
            <Title>{selectedFilename}</Title>
            <Content>
                <ControlBar>
                    <ActionButton
                        tooltip={intl.formatMessage(messages.toggleSourceExplorer)}
                        onClick={toggleSourceTree}
                    >
                        <SourceTreeToggleIcon />
                    </ActionButton>
                    <ActionButton
                        tooltip={intl.formatMessage(messages.toggleFullscreen)}
                        onClick={toggleFullScreen}
                    >
                        <FullScreenToggleIcon />
                    </ActionButton>
                    <ActionButton
                        tooltip={intl.formatMessage(messages.downloadSourceCode)}
                        onClick={onDownload}
                    >
                        <DownloadIcon />
                    </ActionButton>
                </ControlBar>
                <RenderIf isTrue={isSourceTreeVisible}>
                    <StyledResizableColumns
                        initialDividerPosition={initialDividerPosition}
                        leftColumn={leftColumn}
                        minLeftWidth={{ px: 150 }}
                        rightColumn={rightColumn}
                        minRightWidth={{ percent: 25 }}
                        onResize={handleColumnResize}
                        hideDivider
                    />
                </RenderIf>
                <RenderIf isTrue={!isSourceTreeVisible}>{rightColumn}</RenderIf>
            </Content>
        </Container>,
        isFullScreen,
    );
};

export default CodeViewer;
