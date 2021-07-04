import { CSSProperties } from 'react';

export interface BaseProps {
    className?: string;
    style?: CSSProperties;
}

export interface IconProps extends BaseProps {
    title?: string;
}
