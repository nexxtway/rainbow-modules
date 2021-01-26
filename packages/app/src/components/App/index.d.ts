import { ReactNode } from 'react';

export interface RainbowFirebaseAppProps {
    app: Record<string, unknown>;
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
