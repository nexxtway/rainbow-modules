import { ReactNode, CSSProperties } from 'react';

export interface SignUpWithGoogleProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The header can include text or a component,
     * and is displayed at the top of the component. */
    header?: ReactNode;
    /** The content to show when the user is authenticated. */
    children?: ReactNode;
}

export default function (props: SignUpWithGoogleProps): JSX.Element | null;
