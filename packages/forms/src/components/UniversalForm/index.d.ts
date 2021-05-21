import { ReactNode } from 'react';
import { FormApi, SubmissionErrors, ValidationErrors } from 'final-form';

export interface UniversalFormProps {
    /** Callback that will be invoke after on submit event, it will receive an object with all
     * the values of the form already validated.
     */
    onSubmit?: (
        values: Record<string, unknown>,
        form: FormApi<Record<string, unknown>, Partial<Record<string, unknown>>>,
        callback?: (errors?: SubmissionErrors) => void,
    ) => SubmissionErrors | Promise<SubmissionErrors | undefined> | undefined | void;
    /** The id of the form element */
    id?: string;
    /** The initial values of the form e.g. { name: 'Max', age: 30 } */
    initialValues?: Record<string, unknown>;
    /** If true, only unmodified values will be overritten when initializing the form with new values.
     * This allows the user to continue to edit a record after the form is reinitialized.
     * Defaults to false. */
    keepDirtyOnReinitialize?: boolean;
    /** Validate function that takes all the values of the form and returns any validation errors or empty object when no errors.
     * Validation errors must be in the same shape as the values of the form.
     */
    validate?: (
        values: Record<string, unknown>,
    ) => ValidationErrors | Promise<ValidationErrors> | undefined;
    children?: ReactNode;
}

export default function (props: UniversalFormProps): JSX.Element | null;
