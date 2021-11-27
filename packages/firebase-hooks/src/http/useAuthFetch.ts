import { useState, useCallback } from 'react';
import useFirebaseApp from '../useFirebaseApp';

const separator = '/';
const replace = new RegExp(`${separator}{1,}`, 'g');

const pathJoin = (...parts: string[]) => {
    return parts.join(separator).replace(replace, separator);
};

interface Params {
    functionName: string;
    region?: string;
}

interface FetchConfig {
    body?: Record<string, unknown>;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

interface ReturnValue {
    isLoading: boolean;
    fetch: (pathname: string, config: FetchConfig) => Promise<unknown>;
    [key: string]: unknown;
}

const DEFAULT_REGION = 'us-central1';

const useAuthFetch = ({ functionName, region }: Params): ReturnValue => {
    const [isLoading, setLoading] = useState(false);
    const app = useFirebaseApp();

    const fetchFn = useCallback(
        async (pathname, config = {}) => {
            setLoading(true);
            const token = await app.auth().currentUser?.getIdToken();
            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
            const { projectId } = app.options as { projectId: string };
            const baseUrl = `https://${region || DEFAULT_REGION}-${projectId}.cloudfunctions.net`;
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
                return result;
            } catch (error) {
                setLoading(false);
                throw error;
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [functionName, region],
    );

    return {
        fetch: fetchFn,
        isLoading,
    };
};

export default useAuthFetch;
