import { useContext } from 'react';
import Context from '../context';

export default function useCurrentUser() {
    const { app } = useContext(Context);
    if (app) {
        return app.auth().currentUser;
    }
    return null;
}
