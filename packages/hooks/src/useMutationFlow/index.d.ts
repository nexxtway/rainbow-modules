import { ReactNode } from 'react';

type feedbackType = 'notification' | 'message';

interface Type {
    success?: feedbackType;
    error?: feedbackType;
}

export interface MutationOptions {
    mutation?: (unknow) => void;
    submitSpinnerMessage?: ReactNode;
    successMessage?: string | ((unknow) => void) | null;
    errorMessage?: string | ((unknow) => void) | null;
    onSuccess?: () => void;
    onError?: () => void;
    type?: feedbackType | Type;
}

export default function (opts: MutationOptions): { mutate: (...args: unknown[]) => void };
