import { CSSProperties, Ref } from 'react';

export interface FloatingSearchProps {
    /** Specifies the value of an FloatingSearch element. */
    value?: string;
    /** Controls whether the FloatingSearch is open or not. */
    isVisible?: boolean;
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerElementRef: Ref<HTMLElement> | (() => Ref<HTMLElement>);
    /** The action triggered when a value attribute changes. */
    onChange?: (value: string) => void;
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The action triggered to close the FloatingSearch. */
    onRequestClose?: () => void;
    /** A CSS class for the FloatingSearch in addition to the component's base classes. */
    className?: string;
}

export default function (props: FloatingSearchProps): JSX.Element | null;
