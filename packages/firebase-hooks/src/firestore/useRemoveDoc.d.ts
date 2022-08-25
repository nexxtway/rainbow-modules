import { UseMutationOptions, UseMutationResult } from 'react-query/types';

export default function <
    TData = unknown,
    TError = unknown,
    TVariables = string,
    TContext = unknown
>(
    opts?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, string, TContext>;
