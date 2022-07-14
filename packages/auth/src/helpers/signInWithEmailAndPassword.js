import { signInWithEmailAndPassword as fbSignInWithEmailAndPassword } from 'firebase/auth';

export default function useSignInWithEmailAndPassword(auth, email, password) {
    if (auth.signInWithEmailAndPassword) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    return fbSignInWithEmailAndPassword(auth, email, password);
}
