type feedbackType = 'notification' | 'message';

interface Type {
    success?: feedbackType;
    error?: feedbackType;
}

export interface MutationOptions {
    mutation?: (unknow) => void;
    successMessage?: string | ((unknow) => void);
    errorMessage?: string | ((unknow) => void);
    onSuccess?: () => void;
    onError?: () => void;
    type?: feedbackType | Type;
}

export default function (opts: MutationOptions): { mutate: () => void };
