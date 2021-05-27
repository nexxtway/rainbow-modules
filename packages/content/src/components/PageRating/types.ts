import { ChangeEvent, ReactNode } from 'react';

export type LabelAlignments = 'center' | 'left' | 'right' | 'inlineLeft' | 'inlineRight';

export type Values = 'happy' | 'neutral' | 'sad';

export interface IconProps {
    value?: string | number;
    isSelected?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

export interface PageRatingProps {
    className?: string;
    style?: Record<string, unknown>;
    label?: string;
    labelAlignment?: LabelAlignments;
    value?: Values;
    onChange?: (value: Values) => void;
}
