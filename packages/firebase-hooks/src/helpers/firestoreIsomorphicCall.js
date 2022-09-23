import * as firestore from 'firebase/firestore';
import getCallableKey from './getCallableKey';

/**
 * Call a function on a Firebase ref regardless of the Firebase version
 *
 * @param ref - A firestore reference
 * @param {*} keyV8 - The name of the function to call if using Firebase 8
 * @param {*} keyV9 - The name of the function to call if using Firebase 9
 * @param  {...any} params - The params to forward to the called function
 * @returns A rejected Promise if something went wrong, and the result of calling the Firebase function in any other case.
 */
const firestoreIsomorphicCall = (ref, keyV8, keyV9, ...params) => {
    if (!ref) return Promise.reject(new Error('No reference provided'));

    // Firebase <= 8
    let key = getCallableKey(ref, keyV8);
    if (key) {
        return ref[key](...params);
    }

    // Firebase 9
    key = getCallableKey(firestore, keyV9);
    if (key) {
        return firestore[key](ref, ...params);
    }

    return Promise.reject(new Error('Unable to call method'));
};

export default firestoreIsomorphicCall;
