import { CSSProperties } from 'react';

export interface CopyToClipboardButtonProps {
    /** Text to be copied to clipboard */
    value?: string;
    /** The variant changes the appearance of the button. Accepted variants include
     * base, brand, success, destructive, neutral, outline-brand, border, border-filled, inverse and border-inverse. */
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
     * and large. For non-base variants, options include xx-small, x-small, small, and medium. */
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only border-filled, brand, and success variant can be shaded. */
    shaded?: boolean;
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. */
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
    /** The border radius of the buttonIcon. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded.*/
    borderRadius?: 'rounded' | 'semi-rounded' | 'semi-square' | 'square';
}

export default function (props: CopyToClipboardButtonProps): JSX.Element | null;
