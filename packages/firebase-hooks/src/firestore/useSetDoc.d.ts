import firebase from 'firebase/compat';
import { UseMutationOptions, UseMutationResult } from 'react-query/types';

interface Opts {
    path: string;
    data?: Partial<firebase.firestore.DocumentData>;
    options?: firebase.firestore.SetOptions;
}

export default function <TData = unknown, TError = unknown, TVariables = Opts, TContext = unknown>(
    opts?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, TVariables, TContext>;
