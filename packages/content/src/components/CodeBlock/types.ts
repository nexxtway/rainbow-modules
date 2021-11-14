import React, { CSSProperties } from 'react';

export interface CopiedMessageProps {
    className?: string;
    style?: CSSProperties;
}

export interface CopyButtonProps {
    value?: string;
    hideHeader?: boolean;
    showCopiedMessage?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface CodeBlockProps {
    className?: string;
    style?: CSSProperties;
    language?: string;
    label?: string;
    value?: string;
    showLineNumbers?: boolean;
    hideHeader?: boolean;
    theme?: 'light' | 'dark';
}
