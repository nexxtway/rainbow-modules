import { ComponentType } from 'react';

interface Schema {
    /** The label of the input field. */
    label: string;
    /** The name of the input field. */
    name: string;
    /** The type of the input field. */
    type?: string;
    /** Specifies that the input field must be filled out before submitting the form. */
    required?: boolean;
    /** Text that is displayed when the input field is empty, to prompt the user for a valid entry. */
    placeholder?: string;
    /** Specifies that the input field is disabled. */
    disabled?: boolean;
    /** Specifies that the input field is read-only. */
    readOnly?: boolean;
    /** Specifies the minimum value allowed in the input field. */
    max?: number;
    /** Specifies the maximum value allowed in the input field. */
    min?: number;
    /** The maximum number of characters allowed in the input field. */
    maxLength?: number;
    /** The minimum number of characters allowed in the input field. */
    minLength?: number;
}

interface Types {
    [key: string]: {
        /** The component that will render the matching input field type. */
        component?: ComponentType;
        /** The component props that will be passed to the matching input field type. */
        props?: Record<string, unknown>;
    };
}

export interface Props {
    /** An array with the fields definitions. */
    fieldsSchema?: Array<Schema>;
    /** A map where you assign a component and its props to a field type. You can also pass custom props to the components e.g:
     * types: { tex: { component: Input, props: { className: 'my-class', ... } } }
     */
    types?: Types;
}

export default function (props: Props): JSX.Element | null;
