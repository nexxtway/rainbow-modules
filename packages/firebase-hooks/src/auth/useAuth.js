import * as auth from 'firebase/auth';
import useFirebaseApp from '../useFirebaseApp';
import getCallableKey from '../helpers/getCallableKey';

/**
 * Resolves the Firebase Auth instance, regardless of the Firebase SDK version.
 * @param {FirebaseApp} app The firebase app
 * @returns Auth instance
 */
const useAuth = () => {
    const app = useFirebaseApp();
    if (!app) return null;

    // Firebase <= 8
    let key = getCallableKey(auth, 'auth');
    if (key) {
        return app[key]();
    }

    // Firebase 9
    key = getCallableKey(auth, 'getAuth');
    if (key) {
        return auth[key](app);
    }

    return null;
};

export default useAuth;
