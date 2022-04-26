import { CSSProperties } from 'react';

interface Value {
    value?: string;
    row?: Record<string, unknown>;
}

export interface NavigationButtonColumnProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** A string that comes from the data and is displayed in the table cell  */
    value?: string;
    /** An object with the data of the row */
    row?: Record<string, unknown>;
    /** The action triggered when click on the button. */
    onClick?: (value: Value) => void;
}

export default function (props: NavigationButtonColumnProps): JSX.Element | null;
