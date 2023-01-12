import { FormApi, SubmissionErrors } from 'final-form';
import { ComponentType, ReactNode } from 'react';

export interface UniversalFormModalProps {
    /** The title of the Modal */
    title?: ReactNode;
    /** When `true` the Modal opens */
    isOpen?: boolean;
    /** Callback that will be invoke when close event. Click on Cancel or Close Button or press ESC. */
    onRequestClose?: () => void;
    /** Callback that will be invoke after on submit event, it will receive an object with all
     * the values of the form already validated.
     */
    onSubmit?: (
        values: Record<string, unknown>,
        form: FormApi<Record<string, unknown>, Partial<Record<string, unknown>>>,
        callback?: (errors?: SubmissionErrors) => void,
    ) => SubmissionErrors | Promise<SubmissionErrors | undefined> | undefined | void;
    /**
     * Component Class or Function with the fields of your form. Use Field component of react-final-form.
     */
    fields?: ComponentType<P>;
    /** The initial values of the form e.g. { name: 'Max', age: 30 } */
    initialValues?: Record<string, unknown>;
    /** The label of the submit button on the form */
    submitButtonLabel?: ReactNode;
    /** The label of the cancel button on the form */
    cancelButtonLabel?: ReactNode;
    /** The id of the outer element. */
    id?: string;
    /** The border radius of the button and dropdown. Valid values are square, 'semi-square', semi-rounded and rounded. This value defaults to rounded. */
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
    [key: string]: unknown;
}

export default function (props: UniversalFormModalProps): JSX.Element | null;
