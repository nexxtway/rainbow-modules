import { useState, useCallback } from 'react';
import useAuth from '../auth/useAuth';
import useFirebaseApp from '../useFirebaseApp';

const pathJoin = (...parts: string[]) => {
    return parts
        .map((part, index) => {
            if (index === 0) {
                return part.trim().replace(/[/]*$/g, '');
            }
            return part.trim().replace(/(^[/]*|[/]*$)/g, '');
        })
        .filter((x) => x.length)
        .join('/');
};

interface Params {
    functionName: string;
    region?: string;
}

interface FetchConfig<TBody> {
    body?: TBody;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

interface ReturnValue<TData, TBody> {
    isLoading: boolean;
    fetchAsync: (pathname: string, config?: FetchConfig<TBody>) => Promise<TData>;
    [key: string]: unknown;
}

const DEFAULT_REGION = 'us-central1';

const useAuthFetch = <TData = unknown, TBody = Record<string, unknown>>({
    functionName,
    region = DEFAULT_REGION,
}: Params): ReturnValue<TData, TBody> => {
    const [isLoading, setLoading] = useState(false);
    const app = useFirebaseApp();
    const auth = useAuth();

    const fetchFn = useCallback(
        async (pathname, config = {}) => {
            setLoading(true);
            const token = await auth.currentUser?.getIdToken();
            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
            const { projectId } = app.options as { projectId: string };
            const baseUrl = `https://${region}-${projectId}.cloudfunctions.net`;
            const url = pathJoin(baseUrl, functionName, pathname);

            const { body, method = 'GET', ...rest } = config;
            try {
                const response = await fetch(url, {
                    headers,
                    body: body ? JSON.stringify(body) : undefined,
                    method,
                    ...rest,
                });
                const result = await response.json();
                setLoading(false);
                if (response.ok) {
                    return result;
                }
                throw result;
            } catch (error) {
                setLoading(false);
                throw error;
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [functionName, region],
    );

    return {
        fetchAsync: fetchFn,
        isLoading,
    };
};

export default useAuthFetch;
