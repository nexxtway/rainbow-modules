import { CSSProperties, ReactNode } from 'react';

export interface BatchActionsBarProps {
    /** The title at the left of the BatchActionsBar component. */
    label?: ReactNode;
    /** The title at the left of the BatchActionsBar component. */
    itemsLength?: number;
    /** The title at the left of the BatchActionsBar component. */
    onRequestClose?: () => void;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** Show/Hide the component. */
    isVisible?: boolean;
    children?: ReactNode;
}

export default function (props: BatchActionsBarProps): JSX.Element | null;
