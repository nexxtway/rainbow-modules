import { useState, useContext, useEffect } from 'react';
import context from '../context';

export default function useAuthState() {
    const [isAuth, setIsAuth] = useState();
    const { app } = useContext(context);

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged((user) => {
            if (user) {
                return setIsAuth(true);
            }
            return setIsAuth(false);
        });
        return () => unsubscribe();
    }, [app]);
    return isAuth;
}
