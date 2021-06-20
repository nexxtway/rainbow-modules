import React from 'react';

export interface CopyButtonProps {
    value?: string;
    hideHeader?: boolean;
    showCopiedMessage?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface CodeBlockProps {
    language?: string;
    label?: string;
    value?: string;
    showLineNumbers?: boolean;
    hideHeader?: boolean;
}
