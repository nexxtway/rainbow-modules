export interface InputConfig {
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}

export interface RowError {
    value?: string;
    note?: string;
}
