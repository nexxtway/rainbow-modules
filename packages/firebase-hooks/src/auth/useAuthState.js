import { useState, useEffect } from 'react';
import useAuth from './useAuth';

export default function useAuthState() {
    const [isAuth, setIsAuth] = useState();
    const auth = useAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                return setIsAuth(true);
            }
            return setIsAuth(false);
        });
        return () => unsubscribe();
    }, [auth]);
    return isAuth;
}
