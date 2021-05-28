import { CSSProperties, ReactNode } from 'react';

export interface FloatingTopBarProps {
    className?: string;
    style?: CSSProperties;
    isOpen?: boolean;
    children?: ReactNode;
}
