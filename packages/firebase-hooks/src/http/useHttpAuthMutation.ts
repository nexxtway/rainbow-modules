import { useMutation, useQueryClient, UseMutationResult, UseMutationOptions } from 'react-query';
import useAuthFetch from './useAuthFetch';

interface Params {
    functionName: string;
    pathname: string;
    region?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    invalidateQueriesOnSuccess?: string | string[];
}

const useHttpAuthMutation = <TData = unknown, TVariables = Record<string, unknown>>(
    params: Params,
    config: Omit<UseMutationOptions<TData, unknown, TVariables | undefined>, 'mutationFn'> = {},
): UseMutationResult<TData, unknown, TVariables | undefined> => {
    const { functionName, region, pathname, method = 'POST', invalidateQueriesOnSuccess } = params;
    const { fetchAsync } = useAuthFetch<TData, TVariables>({ functionName, region });
    const queryClient = useQueryClient();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onSuccess, onError, onSettled, ...configRest } = config; // exclude callback so they can't be used with useHttpAuthMutation, instead use the callbacks in the returned mutation function
    return useMutation<TData, unknown, TVariables | undefined>(
        (body?: TVariables) =>
            fetchAsync(pathname, {
                method,
                body,
            }),
        {
            ...configRest,
            onSuccess: () => {
                if (invalidateQueriesOnSuccess) {
                    return queryClient.invalidateQueries(invalidateQueriesOnSuccess);
                }
                return Promise.resolve();
            },
        },
    );
};

export default useHttpAuthMutation;
