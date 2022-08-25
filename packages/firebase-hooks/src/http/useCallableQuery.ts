import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useCallableQuery = <TData = unknown, TParams = unknown>(
    fnName: string,
    params: TParams,
    opts: Omit<
        UseQueryOptions<TData | undefined, unknown, TData | undefined>,
        'queryKey' | 'queryFn'
    >,
): UseQueryResult<TData | undefined> => {
    const app = useFirebaseApp();
    return useQuery<TData | undefined, unknown, TData | undefined>(
        fnName,
        async () => {
            const res = await app.functions().httpsCallable(fnName)(params);
            if (res && res.data) {
                return res.data as TData;
            }
            return undefined;
        },
        opts,
    );
};

export default useCallableQuery;
