import { CSSProperties, ReactNode } from 'react';

export interface UniversalPickerProps {
    /** The name of UniversalPicker. */
    name?: string;
    /** The value of the element. */
    value?: string | Array<string>;
    /** If true then a multiple selection is allowed */
    multiple?: boolean;
    /** The action triggered when a value attribute changes. */
    onChange?: (value: string | Array<string>) => void;
    /** If is set to true the UniversalPicker is required. This value defaults to false. */
    required?: boolean;
    /** The title at the top of the UniversalPicker component. */
    label?: ReactNode;
    /** Describes the position of the UniversalPicker label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment?: 'left' | 'center' | 'right';
    /** Specifies that an UniversalPicker must be filled out before submitting the form. */
    error?: ReactNode;
    /** The size of the UniversalPicker. Valid values are small, medium, and large.
     * This value defaults to medium. */
    size?: 'small' | 'medium' | 'large';
    /** The direction of the children. */
    direction?: 'horizontal' | 'vertical';
    /** The id of the outer element. */
    id?: string;
    /** The class name of the root element. */
    className?: string;
    /** It is an object with custom style applied to the root element. */
    style?: CSSProperties;
}

export default function (props: UniversalPickerProps): JSX.Element | null;
