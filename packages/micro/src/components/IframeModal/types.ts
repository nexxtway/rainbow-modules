import { CSSProperties } from 'react';

export interface IframeModalProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    src?: string;
    isOpen?: boolean;
    title?: string;
    onRequestClose?: () => void;
}
