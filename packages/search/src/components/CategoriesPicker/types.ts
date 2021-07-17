import { CSSProperties, ReactNode } from 'react';

export interface CategoriesPickerProps {
    /**
     * The ID of the container element
     */
    id?: string;
    /**
     * A CSS class for the outer element, in addition to the component's base classes.
     */
    className?: string;
    /**
     * An object with custom style applied for the outer element.
     */
    style?: CSSProperties;
    /**
     * The name of CategoriesPicker.
     */
    name?: string;
    /**
     * The value of the element.
     */
    value?: string | string[];
    /**
     * An array containing the category names to show.
     */
    options?: string[];
    /**
     * When true, multiple categories can be selected at the same time.
     */
    multiple?: boolean;
    /**
     * The title at the top of the CategoriesPicker component.
     */
    label?: ReactNode;
    /**
     * The action triggered when the value changes.
     */
    onChange?: (value: string | string[]) => void;
}

export interface OptionsProps {
    options?: string[];
    multiple?: boolean;
}

export interface OptionProps {
    value?: string;
    multiple?: boolean;
    isSelected?: boolean;
    isHover?: boolean;
    isFocused?: boolean;
    children?: ReactNode;
}
