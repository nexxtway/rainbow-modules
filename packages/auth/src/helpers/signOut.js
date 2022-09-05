import * as firebaseAuth from 'firebase/auth';

export default function signOut(auth) {
    // Firebase <= 8
    let key = Object.prototype.hasOwnProperty.call(auth, 'signOut') ? 'signOut' : null;
    if (key) {
        return auth[key]();
    }

    // Firebase 9
    key = Object.prototype.hasOwnProperty.call(firebaseAuth, 'signOut') ? 'signOut' : null;
    if (key) {
        return firebaseAuth[key];
    }

    return null;
}
