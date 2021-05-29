import { CSSProperties, ReactNode } from 'react';

export interface FloatingTopBarProps {
    className?: string;
    style?: CSSProperties;
    isVisible?: boolean;
    children?: ReactNode;
}
