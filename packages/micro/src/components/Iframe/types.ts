import { CSSProperties } from 'react';

export type Variant = 'fullPage' | 'popover';

export interface IframeProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    src?: string;
    isOpen?: boolean;
    title?: string;
    variant?: Variant;
    onRequestClose?: () => void;
}
