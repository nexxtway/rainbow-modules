import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import useFunctions from '../functions/useFunctions';
import httpsCallable from '../helpers/httpsCallable';

const useCallableQuery = (
    fnName: string,
    params: unknown,
    opts: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
): UseQueryResult => {
    const functions = useFunctions();
    return useQuery(
        fnName,
        async () => {
            const res = await httpsCallable(functions, fnName)(params);
            if (res && res.data) {
                return res.data;
            }
            return undefined;
        },
        opts,
    );
};

export default useCallableQuery;
