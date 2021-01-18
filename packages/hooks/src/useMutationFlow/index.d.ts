export interface MutationOptions {
    mutation: () => void;
    successMessage: string;
    errorMessage: string;
    onSuccess: () => void;
    onError: () => void;
}

export default function (opts: MutationOptions): JSX.Element | null;
