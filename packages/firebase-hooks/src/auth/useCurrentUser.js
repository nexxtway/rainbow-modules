import { useContext } from 'react';
import context from '../context';

export default function useAuthState() {
    const { app } = useContext(context);
    return app.auth().currentUser;
}
