import { CSSProperties, ReactNode } from 'react';

export interface ContainerProps {
    isVisible?: boolean;
}

export interface FloatingBarProps {
    className?: string;
    style?: CSSProperties;
    isVisible?: boolean;
    children?: ReactNode;
}
