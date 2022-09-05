import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import useFunctions from '../functions/useFunctions';
import httpsCallable from '../helpers/httpsCallable';

const useCallableQuery = <TData = unknown, TParams = unknown>(
    fnName: string,
    params: TParams,
    opts: Omit<
        UseQueryOptions<TData | undefined, unknown, TData | undefined>,
        'queryKey' | 'queryFn'
    >,
): UseQueryResult<TData | undefined> => {
    const functions = useFunctions();
    return useQuery<TData | undefined, unknown, TData | undefined>(
        fnName,
        async () => {
            const res = await httpsCallable(functions, fnName)(params);
            if (res && res.data) {
                return res.data as TData;
            }
            return undefined;
        },
        opts,
    );
};

export default useCallableQuery;
