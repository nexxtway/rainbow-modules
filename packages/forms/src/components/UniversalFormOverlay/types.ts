import { ComponentType, ReactNode, RefObject } from 'react';

type InitialValues = Record<string, unknown>;
export interface UniversalFormOverlayProps {
    /**
     * Ref or function that returns a ref to a DOM element, the DOM element resolved by
     * this ref will be used to positioning the component passed when visible
     */
    triggerElementRef?: RefObject<HTMLElement> | (() => RefObject<HTMLElement>);
    /**
     * Component Class or Function with the fields of your form. Use Field component
     * of react-final-form.
     */
    fields?: ComponentType;
    /**
     * When true the Modal opens
     */
    isOpen?: boolean;
    /**
     * A callback triggered when the overlay component is opened. This is useful
     * for example to set focus to an element after it is opened.
     */
    onOpened?: () => void;
    /**
     * Callback that will be invoked after on submit event, it will receive an
     * object with all the values of the form already validated.
     */
    onSumbit?: (values: Record<string, unknown>) => void;
    /**
     * Callback that will be invoke when close event. Click on Cancel or Close Button
     * or press ESC.
     */
    onRequestClose?: () => void;
    /**
     * The initial values of the form e.g. { name: 'Max', age: 30 }.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    initialValues?: InitialValues;
    /**
     * The label of the submit button on the form.
     */
    submitButtonLabel?: ReactNode;
    /**
     * The label of the cancel button on the form.
     */
    cancelButtonLabel?: ReactNode;
}
