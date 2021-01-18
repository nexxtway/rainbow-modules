import { FormApi, SubmissionErrors } from 'final-form';

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
}

export default function (props: UniversalFormProps): JSX.Element | null;
