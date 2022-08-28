import firebase from 'firebase';
import { UseMutationOptions, UseMutationResult } from 'react-query/types';

export default function <
    TData = unknown,
    TError = unknown,
    TVariables = firebase.firestore.DocumentData,
    TContext = unknown
>(
    path: string,
    opts?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, TVariables, TContext>;
