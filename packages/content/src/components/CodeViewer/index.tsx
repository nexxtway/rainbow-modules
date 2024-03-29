import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { RainbowThemeContainer, RenderIf, Tree } from 'react-rainbow-components';
import { Download as DownloadIcon } from '@rainbow-modules/icons';
import { OnResizeParams } from '@rainbow-modules/layout/src/components/ResizableColumns/types';
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
    StyledCopiedMessage,
} from './styled';
import { ShowTree, HideTree, Enlarge, Decrease } from './icons';
import SourceTree from './sourceTree';
import SourceFilePreview from './sourceFilePreview';
import generateTreeNode from './helpers/generateTreeNode';
import getIconForFolder from './helpers/getIconForFolder';
import ActionButton from './actionButton';
import messages from './messages';
import defaultLanguageResolver from './helpers/getLanguageFromContentType';
import CopyButton from '../CodeBlock/copyButton';
import useCopyToClipboardMessage from '../../hooks/useCopyToClipboardMessage';

const lightTheme = {
    rainbow: {
        palette: {
            mainBackground: '#000',
        },
    },
};

const renderComponent = (componentJsx: React.ReactElement, isFullScreenMode: boolean) => {
    if (isFullScreenMode) {
        return createPortal(componentJsx, document.body);
    }
    return componentJsx;
};

const CodeViewer: React.FC<CodeViewerProps> = ({
    icon,
    name,
    languageResolver,
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
    const [language, setLanguage] = useState<string>();

    const selectedNodeName = selectedNode && selectedNode?.name;
    const selectedFilename = selectedNode && selectedNode?.label;

    const handleColumnResize = ({ dividerPosition }: OnResizeParams) =>
        setIinitialDividerPosition(dividerPosition ?? 250);
    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
    const toggleSourceTree = () => setSourceTreeVisible(!isSourceTreeVisible);

    const resolveLanguage = languageResolver || defaultLanguageResolver;

    const handleNodeExpand = async ({ nodePath }: SelectValue) => {
        if (!onFolderExpand) return;
        const child: DataItem = Tree.getNode(treeData, nodePath);
        if (!child.isExpanded && child.children?.length === 0) {
            child.isLoading = !child.isLoading;
            setTreeData([...treeData]);
            const { path } = child;
            const { files } = await onFolderExpand({ folderPath: path });
            child.children = files.map((entry) => generateTreeNode({ ...entry, path }));
            child.isExpanded = !child.isExpanded;
            child.isLoading = !child.isLoading;
        } else {
            child.isExpanded = !child.isExpanded;
        }
        child.icon = getIconForFolder(child.isExpanded);
        setTreeData([...treeData]);
    };

    const onSelectFile = async (node: SelectValue) => {
        const { name: nodeName, nodePath } = node;
        const child: DataItem = Tree.getNode(treeData, nodePath);
        if (Array.isArray(child.children)) {
            handleNodeExpand(node);
            return;
        }

        if (!onFileSelect) return;
        setSelectedNode({ name: nodeName, nodePath, ...child });
        setIsLoadingContent(true);
        const { path } = child;
        const { content: fileContent, contentType } = await onFileSelect({
            filePath: path,
        });
        const fileLanguage = await resolveLanguage({ contentType });
        setLanguage(fileLanguage);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsFullScreen(false);
            }
        };
        if (isFullScreen) {
            window.addEventListener('keydown', handler);
        }

        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, [isFullScreen]);

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

    const [isMessageVisible, showMessage] = useCopyToClipboardMessage();
    const shouldRenderCopyButton = !isLoadingTree && !isLoadingContent && content;
    const rightColumn = (
        <RightColumn isLoading={isLoadingContent}>
            <RenderIf isTrue={shouldRenderCopyButton}>
                <RainbowThemeContainer theme={lightTheme}>
                    <CopyButton
                        value={content}
                        showCopiedMessage={isMessageVisible}
                        onClick={showMessage}
                        hideHeader
                    />
                </RainbowThemeContainer>
            </RenderIf>
            <RenderIf isTrue={isMessageVisible}>
                <StyledCopiedMessage />
            </RenderIf>
            <SourceFilePreview isLoading={isLoadingContent} content={content} language={language} />
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
                    <RenderIf isTrue={onDownload}>
                        <ActionButton
                            tooltip={intl.formatMessage(messages.downloadSourceCode)}
                            onClick={onDownload}
                        >
                            <DownloadIcon />
                        </ActionButton>
                    </RenderIf>
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

CodeViewer.propTypes = {
    icon: PropTypes.node,
    name: PropTypes.node,
    languageResolver: PropTypes.func,
    onFolderExpand: PropTypes.func,
    onFileSelect: PropTypes.func,
    onDownload: PropTypes.func,
};

CodeViewer.defaultProps = {
    icon: undefined,
    name: undefined,
    languageResolver: undefined,
    onFolderExpand: undefined,
    onFileSelect: undefined,
    onDownload: undefined,
};

export default CodeViewer;
