import { ReactNode } from 'react';

export interface SignUpWithGoogleProps {
    /** The header can include text or a component,
     * and is displayed at the top of the component. */
    header?: ReactNode;
    /** The content to show when the user is authenticated. */
    children?: ReactNode;
}

export default function (props: SignUpWithGoogleProps): JSX.Element | null;
