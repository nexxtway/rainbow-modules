import { ReactNode } from 'react';

export interface AppSpinnerProps {
    /** The spinner to show when the app is loading. */
    spinner?: ReactNode;
}

export default function (props: AppSpinnerProps): JSX.Element | null;
