import * as firebaseAuth from 'firebase/auth';

export default function getAuth(app) {
    if (!app) throw new Error('Firebase app is not defined');

    // Firebase <= v8
    let key = Object.prototype.hasOwnProperty.call(app, 'auth') ? 'auth' : null;
    if (key) {
        return app[key]();
    }

    // Firebase v9
    key = Object.prototype.hasOwnProperty.call(firebaseAuth, 'getAuth') ? 'getAuth' : null;
    if (key) {
        return firebaseAuth[key](app);
    }

    return null;
}
