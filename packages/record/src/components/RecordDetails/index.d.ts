import { CSSProperties } from 'react';

export interface RecordDetailsProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    id?: string;
}

export default function (props: RecordDetailsProps): JSX.Element | null;
