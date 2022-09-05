import * as firebaseAuth from 'firebase/auth';

export default function useSignInWithEmailAndPassword(auth, email, password) {
    // Firebase <= v8
    let key = Object.prototype.hasOwnProperty.call(auth, 'signInWithEmailAndPassword')
        ? 'signInWithEmailAndPassword'
        : null;
    if (key) {
        return auth[key](email, password);
    }

    // Firebase v9
    key = Object.prototype.hasOwnProperty.call(firebaseAuth, 'signInWithEmailAndPassword')
        ? 'signInWithEmailAndPassword'
        : null;
    if (key) {
        return firebaseAuth[key](auth, email, password);
    }

    return null;
}
