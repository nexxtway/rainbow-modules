import { getFirestore } from 'firebase/firestore';
import useFirebaseApp from '../useFirebaseApp';

const useFirestore = () => {
    const app = useFirebaseApp();
    return getFirestore(app);
};

export default useFirestore;
