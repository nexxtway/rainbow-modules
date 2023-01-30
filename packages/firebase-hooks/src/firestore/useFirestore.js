import { getFirestore } from 'firebase/firestore';
import useFirebaseApp from '../useFirebaseApp';

const useFirestore = () => {
    const app = useFirebaseApp();
    return app ? getFirestore(app) : null;
};

export default useFirestore;
