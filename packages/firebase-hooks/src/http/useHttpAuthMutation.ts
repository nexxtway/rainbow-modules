import { useMutation, useQueryClient, UseMutationResult, UseMutationOptions } from 'react-query';
import useAuthFetch from './useAuthFetch';

interface Params {
    functionName: string;
    pathname: string;
    region?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    invalidateQueriesOnSuccess?: string | string[];
}

const useHttpAuthMutation = (
    params: Params,
    config: Omit<
        UseMutationOptions<unknown, unknown, Record<string, unknown> | undefined>,
        'mutationFn'
    >,
): UseMutationResult<unknown, unknown, Record<string, unknown> | undefined> => {
    const { functionName, region, pathname, method = 'POST', invalidateQueriesOnSuccess } = params;
    const { fetch } = useAuthFetch({ functionName, region });
    const queryClient = useQueryClient();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onSuccess, onError, onSettled, ...configRest } = config; // exclude callback so they can't be used with useHttpAuthMutation, instead use the callbacks in the returned mutation function
    return useMutation<unknown, unknown, Record<string, unknown> | undefined>(
        (body?: Record<string, unknown>) =>
            fetch(pathname, {
                method,
                body,
            }),
        {
            ...configRest,
            onSuccess: () => {
                if (invalidateQueriesOnSuccess) {
                    return queryClient.invalidateQueries(invalidateQueriesOnSuccess);
                }
                return Promise.resolve(null);
            },
        },
    );
};

export default useHttpAuthMutation;
