import { CSSProperties, ReactNode } from 'react';
import { TreeProps } from 'react-rainbow-components/components/Tree';

export interface BaseProps {
    className?: string;
    style?: CSSProperties;
}

export interface SelectValue {
    nodePath: number[];
    name: string;
}

export interface DataItem {
    label?: ReactNode;
    icon?: ReactNode;
    isExpanded?: boolean;
    isLoading?: boolean;
    isChecked?: boolean | 'indeterminate';
    children?: DataItem[];
    path?: string;
}

export interface FileObject {
    fileName: string;
    type: 'folder' | 'file';
}

interface FolderExpandReturnValue {
    files: Array<FileObject>;
    selectedFileName?: string;
}

export interface FileContent {
    content?: string;
    contentType?: string;
}

export interface LoaderProps {
    message?: string;
}

export interface MessageProps {
    text?: string;
}

export interface SourceTreeProps extends TreeProps {
    isLoading?: boolean;
    name?: ReactNode;
    data?: DataItem[];
    icon?: ReactNode;
}

export interface ActionButtonProps {
    tooltip?: string;
}

export interface SourceFilePreviewProps {
    isLoading?: boolean;
    language?: string;
    content?: string;
}

export interface CodeViewerProps {
    /** An icon to render on top of the files tree. */
    icon?: ReactNode;
    /** A folder or project name that will be visible on top of the files tree. */
    name?: ReactNode;
    /** A function returning a Promise that resolves with an object of type `FolderExpandReturnValue`. */
    onFolderExpand?: (args: { folderPath?: string }) => Promise<FolderExpandReturnValue>;
    /** A function returning a Promise that resolves with the content of the selected file. */
    onFileSelect?: (args: { filePath?: string }) => Promise<FileContent>;
    /** A function that triggers the download of the source code. */
    onDownload?: () => void;
}
