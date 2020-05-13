import { useContext } from 'react';
import Context from './context';

export default function useFirebaseApp() {
    const { app } = useContext(Context);
    return app;
}
