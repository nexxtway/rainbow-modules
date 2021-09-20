import { CSSProperties, ReactNode } from 'react';

export type Variant = 'default' | 'realtime';

export interface InputComponent {
    focus: () => void;
    click: () => void;
    blur: () => void;
}

export interface TrailingProps {
    variant?: Variant;
    value?: string;
    onClear?: () => void;
    children?: ReactNode;
}

export interface InputSearchProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    name?: string;
    variant?: Variant;
    value?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: string | undefined) => void;
    onSearch?: (value: string | undefined) => void;
    placeholder?: string;
    autoComplete?: string;
}
