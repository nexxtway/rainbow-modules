import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useCallableQuery = (
    fnName: string,
    params: unknown,
    opts: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
): UseQueryResult => {
    const app = useFirebaseApp();
    return useQuery(
        fnName,
        async () => {
            const res = await app.functions().httpsCallable(fnName)(params);
            if (res && res.data) {
                return res.data;
            }
            return undefined;
        },
        opts,
    );
};

export default useCallableQuery;
