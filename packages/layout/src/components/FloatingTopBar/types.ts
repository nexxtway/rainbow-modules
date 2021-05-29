import { CSSProperties, ReactNode } from 'react';

export interface ContainerProps {
    isVisible?: boolean;
    top?: number;
}

export interface FloatingTopBarProps {
    className?: string;
    style?: CSSProperties;
    isVisible?: boolean;
    children?: ReactNode;
}
