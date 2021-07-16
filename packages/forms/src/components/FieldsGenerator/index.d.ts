import { ComponentType, ReactNode } from 'react';
import { FieldState } from 'final-form';

interface NumberKeywordShape {
    value?: number;
    errorMessage?: string;
}

interface Option {
    value?: string;
    label?: string;
}

interface Schema {
    /** The label of the input field. */
    label: ReactNode;
    /** The name of the input field. */
    name: string;
    /** The type of the input field. */
    type?: string;
    /** Specifies that the input field must be filled out before submitting the form. */
    required?: boolean | { errorMessage?: string };
    /** Text that is displayed when the input field is empty, to prompt the user for a valid entry. */
    placeholder?: string;
    /** Specifies that the input field is disabled. */
    disabled?: boolean;
    /** Specifies that the input field is read-only. */
    readOnly?: boolean;
    /** Specifies the minimum value allowed in the input field. */
    max?: number | NumberKeywordShape;
    /** Specifies the maximum value allowed in the input field. */
    min?: number | NumberKeywordShape;
    /** The maximum number of characters allowed in the input field. */
    maxLength?: number | NumberKeywordShape;
    /** The minimum number of characters allowed in the input field. */
    minLength?: number | NumberKeywordShape;
    /** An array with select options. Only used when pass type select. */
    options?: Array<Option>;
    /** Input field default value. */
    default?: string | number;
    [key: string]: unknown;
}

interface Types {
    [key: string]: {
        /** The component that will render the matching input field type. */
        component?: ComponentType;
        /** The component props that will be passed to the matching input field type. */
        props?: Record<string, unknown>;
    };
}

interface CustomValidations {
    [key: string]: (
        value: unknown,
        allValues: Record<string, unknown>,
        fieldState: FieldState<unknown>,
        customValidationKeyword: unknown,
    ) => string | undefined;
}

export interface Props {
    /** An array with the fields definitions. */
    schema?: Array<Schema>;
    /** A map where you assign a component and its props to a field type. You can also pass custom props to the components e.g:
     * types: { tex: { component: Input, props: { className: 'my-class', ... } } }
     */
    types?: Types;
    /** An object with the custom validations. e.g: { isEmail: (value) => \regex\.test(value) } */
    validations?: CustomValidations;
    /** Describes the position of the Fields label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment?: string;
}

export default function (props: Props): JSX.Element | null;
