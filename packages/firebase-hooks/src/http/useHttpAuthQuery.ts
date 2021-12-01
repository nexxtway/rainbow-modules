import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query';
import useAuthFetch from './useAuthFetch';

interface Params {
    functionName: string;
    pathname: string;
    region?: string;
    key?: string;
}

const useHttpAuthQuery = (
    params: Params,
    config: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
): UseQueryResult => {
    const { functionName, region, pathname, key } = params;
    const queryKey = key || [functionName, pathname];
    const { fetchAsync } = useAuthFetch({ functionName, region });
    return useQuery(
        queryKey,
        () =>
            fetchAsync(pathname, {
                method: 'GET',
            }),
        config,
    );
};

export default useHttpAuthQuery;
