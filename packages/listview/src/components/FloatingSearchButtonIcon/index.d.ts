import { CSSProperties, ReactNode } from 'react';

export interface FloatingSearchButtonIconProps {
    /** The icon to show if it is passed.
     * It must be a svg icon or a font icon. It is a required value. */
    icon?: ReactNode;
    /** The variant changes the appearance of the button. */
    variant?:
        | 'base'
        | 'neutral'
        | 'brand'
        | 'outline-brand'
        | 'destructive'
        | 'success'
        | 'border'
        | 'border-filled'
        | 'border-inverse'
        | 'inverse';
    /** The size of the buttonIcon. For the base variant, options include x-small, small, medium,
     * and large. For non-base variants, options include xx-small, x-small, small, and medium.
     * This value defaults to medium. */
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only border-filled, brand, and success variant can be shaded. */
    shaded?: boolean;
    /** Displays tooltip text when the mouse moves over the element. */
    title?: string;
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. This value defaults to false. */
    disabled?: boolean;
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex?: number | string;
    /** A description for assistive sreen readers. */
    assistiveText?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The id of the outer element. */
    id?: string;
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder?: string;
    /** The action triggered when a value attribute changes. */
    onChange?: (value: any) => void;
    /** Specifies the value of an input element. */
    value?: string;
}

export default function (props: FloatingSearchButtonIconProps): JSX.Element | null;
