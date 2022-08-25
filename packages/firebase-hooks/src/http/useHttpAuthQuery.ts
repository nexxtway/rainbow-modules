import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query';
import useAuthFetch from './useAuthFetch';

interface Params {
    functionName: string;
    pathname: string;
    region?: string;
    key?: string;
}

const useHttpAuthQuery = <TData = unknown>(
    params: Params,
    config: Omit<UseQueryOptions<TData, unknown, TData>, 'queryKey' | 'queryFn'> = {},
): UseQueryResult<TData> => {
    const { functionName, region, pathname, key } = params;
    const queryKey = key || [functionName, pathname];
    const { fetchAsync } = useAuthFetch<TData>({ functionName, region });
    return useQuery<TData, unknown, TData>(
        queryKey,
        () =>
            fetchAsync(pathname, {
                method: 'GET',
            }),
        config,
    );
};

export default useHttpAuthQuery;
