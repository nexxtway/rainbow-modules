import { ComponentType, ReactNode } from 'react';

export interface ErrorBoundaryProps {
    /** A component that is rendered when an error is caught */
    component?: ReactNode;
    /** A function triggered when an error is caught */
    onError?: (error: Error) => void;
    children?: ReactNode;
}

declare const ErrorBoundary: ComponentType<ErrorBoundaryProps>;
export default ErrorBoundary;
