import { CSSProperties, ReactNode } from 'react';

export type Variant = 'fullPage' | 'popup';

export interface IframeProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    src?: string;
    isOpen?: boolean;
    title?: string;
    header?: ReactNode;
    variant?: Variant;
    onRequestClose?: () => void;
}

export interface InternalIframeProps extends IframeProps {
    isLoading?: boolean;
    onLoad?: () => void;
}
