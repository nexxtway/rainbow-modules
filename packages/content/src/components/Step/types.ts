import { CSSProperties, ReactNode } from 'react';

export interface StepProps {
    className?: string;
    style?: CSSProperties;
    number?: number;
    header?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
}
