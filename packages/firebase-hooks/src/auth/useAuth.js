import { getAuth } from 'firebase/auth';
import useFirebaseApp from '../useFirebaseApp';

/**
 * Resolves the Firebase Auth instance, regardless of the Firebase SDK version.
 * @param {FirebaseApp} app The firebase app
 * @returns Auth instance
 */
const useAuth = () => {
    const app = useFirebaseApp();
    return app ? getAuth(app) : null;
};

export default useAuth;
