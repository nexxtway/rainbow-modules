import { getFunctions } from 'firebase/functions';
import useFirebaseApp from '../useFirebaseApp';

export default function useFunctions() {
    const app = useFirebaseApp();
    if (app.functions) {
        return app.functions();
    }
    return getFunctions(app);
}
