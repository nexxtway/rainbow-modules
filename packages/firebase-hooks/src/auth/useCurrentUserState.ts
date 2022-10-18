import { useMemo } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { User } from 'firebase/auth';
import useCurrentUser from './useCurrentUser';

const key = 'user-profile';

interface ReturnType {
    user: User | null;
    reload: () => Promise<void>;
    isLoading: boolean;
    isFetching: boolean;
}

const useCurrentUserState = (): ReturnType => {
    const user = useCurrentUser();
    const client = useQueryClient();

    const { data, isLoading, isFetching } = useQuery(key, () => Promise.resolve(user));

    return useMemo(
        () => ({
            user: data || null,
            reload: async () => {
                await data?.reload();
                await client.invalidateQueries([key]);
            },
            isLoading,
            isFetching,
        }),
        [client, data, isFetching, isLoading],
    );
};

export default useCurrentUserState;
