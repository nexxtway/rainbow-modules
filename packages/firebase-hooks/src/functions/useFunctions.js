import { getFunctions } from 'firebase/functions';
import useFirebaseApp from '../useFirebaseApp';

export default function useFunctions() {
    const app = useFirebaseApp();
    return getFunctions(app);
}
