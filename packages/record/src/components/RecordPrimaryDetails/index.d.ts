import { CSSProperties } from 'react';

export interface RecordPrimaryDetailsProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    id?: string;
    children?: ReactNode;
}

export default function (props: RecordPrimaryDetailsProps): JSX.Element | null;
