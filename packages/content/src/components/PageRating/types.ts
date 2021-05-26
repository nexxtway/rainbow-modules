import { ChangeEvent, CSSProperties, ReactNode } from 'react';

export type LabelAlignments = 'center' | 'left' | 'right' | 'inlineLeft' | 'inlineRight';

export type Values = 'happy' | 'neutral' | 'sad';

export interface OptionProps {
    name?: string;
    value?: string | number;
    isSelected?: boolean;
    selectedColor?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

export interface PageRatingProps {
    className?: string;
    style?: CSSProperties;
    label?: string;
    labelAlignment?: LabelAlignments;
    value?: Values;
    onChange?: (value: Values) => void;
}
