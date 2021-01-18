import { CSSProperties, ReactNode } from 'react';

export interface RecordSectionProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** /** The text label that appears in the header of the component. */
    label?: ReactNode;
    /** The actions prop is used to place on the right a group of actions that you want to perform on the RecordSection, you are in charge of displaying these actions in the way you prefer. */
    actions?: ReactNode;
}

export default function (props: RecordSectionProps): JSX.Element | null;
