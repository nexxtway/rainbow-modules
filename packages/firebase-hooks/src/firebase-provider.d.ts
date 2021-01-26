import { ReactNode } from 'react';

type Value = {
    app: Record<string, unknown>;
};

export interface FirebaseProviderProps {
    value: Value;
    children: ReactNode;
}

export default function (props: FirebaseProviderProps): JSX.Element | null;
