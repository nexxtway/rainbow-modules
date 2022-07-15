import { ReactNode } from 'react';
import firebase from 'firebase/app';

export interface RainbowFirebaseAppProps {
    app: firebase.app.App;
    theme?: Record<string, unknown>;
    locale?: string;
    translations?: Record<string, unknown>;
    reducers?: Record<string, unknown>;
    middlewares?: Array;
    initialize?: () => void;
    spinner?: ReactNode;
    errorComponent?: ReactNode;
    onError?: (error: Error) => void;
    children?: ReactNode;
}

export default function (props: RainbowFirebaseAppProps): JSX.Element | null;
