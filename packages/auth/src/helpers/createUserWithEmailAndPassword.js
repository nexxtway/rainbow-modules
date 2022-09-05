import * as firebaseAuth from 'firebase/auth';

export default function createUserWithEmailAndPassword(auth, email, password) {
    // Firebase <= 8
    let key = Object.prototype.hasOwnProperty.call(auth, 'createUserWithEmailAndPassword')
        ? 'createUserWithEmailAndPassword'
        : null;
    if (key) {
        return auth[key](email, password);
    }

    // Firebase 9
    key = Object.prototype.hasOwnProperty.call(firebaseAuth, 'createUserWithEmailAndPassword')
        ? 'createUserWithEmailAndPassword'
        : null;
    if (key) {
        firebaseAuth[key](auth, email, password);
    }

    return null;
}
