import React, { CSSProperties, ReactNode } from 'react';
import { LabelAlignment } from 'react-rainbow-components/components/types';

export type Value = string | Record<string, unknown>;

export interface JsonInputProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    value?: Value;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: React.ReactNode;
    onChange?: (value: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
}
