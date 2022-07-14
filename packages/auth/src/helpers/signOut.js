import { signOut as fbSignOut } from 'firebase/auth';

export default function signOut(auth) {
    if (auth.signOut) {
        return auth.signOut();
    }
    return fbSignOut(auth);
}
