import { CSSProperties } from 'react';

export interface EmailPasswordSignInFormProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
}

export default function (props: EmailPasswordSignInFormProps): JSX.Element | null;
