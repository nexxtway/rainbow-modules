import { getFirestore } from 'firebase/firestore';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';

const useFirestore = () => {
    const app = useFirebaseApp();
    if (!app) return null;
    if (app.firestore) {
        return app.firestore();
    }
    return getFirestore(app);
};

export default useFirestore;
