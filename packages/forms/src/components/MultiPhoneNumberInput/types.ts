export interface PhoneNumber {
    countryCode?: string;
    isoCode?: string;
    phone?: string;
}

export interface InputConfig {
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}
