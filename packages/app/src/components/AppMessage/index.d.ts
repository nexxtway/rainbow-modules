import { ReactNode } from 'react';

export interface AppMessageProps {
    isVisible?: boolean;
    message?: ReactNode;
    variant?: 'success' | 'warning' | 'error';
    timeout?: number;
    onHideMessage?: () => void;
}

export default function (props: AppMessageProps): JSX.Element | null;
