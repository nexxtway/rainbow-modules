import { useMutation, useQueryClient, UseMutationResult, UseMutationOptions } from 'react-query';
import useAuthFetch from './useAuthFetch';

interface Params {
    functionName: string;
    pathname: string;
    region?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    invalidateQueries?: string | string[];
}

const useHttpAuthMutation = (
    params: Params,
    config: Omit<
        UseMutationOptions<unknown, unknown, Record<string, unknown> | undefined>,
        'mutationFn'
    >,
): UseMutationResult<unknown, unknown, Record<string, unknown> | undefined> => {
    const { functionName, region, pathname, method = 'POST', invalidateQueries } = params;
    const { fetch } = useAuthFetch({ functionName, region });
    const queryClient = useQueryClient();
    return useMutation<unknown, unknown, Record<string, unknown> | undefined>(
        (body?: Record<string, unknown>) =>
            fetch(pathname, {
                method,
                body,
            }),
        {
            onSuccess: (...args) => {
                if (invalidateQueries) {
                    queryClient.invalidateQueries(invalidateQueries);
                }
                if (typeof config?.onSuccess === 'function') {
                    config.onSuccess(...args);
                }
            },
            ...config,
        },
    );
};

export default useHttpAuthMutation;
