import { useEffect, useState } from 'react';
import useCurrentUser from './useCurrentUser';

interface Claims {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const useUserClaims = (): [Claims, boolean] => {
    const currentUser = useCurrentUser();
    const [claims, setClaims] = useState<Claims>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            if (currentUser) {
                const idTokenResult = await currentUser.getIdTokenResult(true);
                setClaims(idTokenResult.claims);
                setIsLoading(false);
            }
        })();
    }, [currentUser]);

    return [claims, isLoading];
};

export default useUserClaims;
