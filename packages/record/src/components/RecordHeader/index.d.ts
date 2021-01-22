import { CSSProperties, ReactNode } from 'react';

export interface RecordHeaderProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The entity name that appears in the header of the component. */
    label?: ReactNode;
    /** The main text that appears in the header of the component. */
    description?: ReactNode;
    /** The actions prop is used to place on the right a group of actions that you want to perform on the RecordHeader, you are in charge of displaying these actions in the way you prefer. */
    actions?: ReactNode;
    /** The icon that appears in the header of the component. If not passed a fallback icon will be shown. */
    icon?: ReactNode;
    /** The tags prop is used to show badges on the header of the component. */
    tags?: ReactNode;
    /** Specifies whether data is being loaded. The default is false. */
    isLoading?: boolean;
    children?: ReactNode;
}

export default function (props: RecordHeaderProps): JSX.Element | null;
