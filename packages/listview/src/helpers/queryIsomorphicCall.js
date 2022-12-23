import * as firestore from 'firebase/firestore';
import hasOwnProperty from './hasOwnProperty';

/**
 * Call a function on a Firebase ref regardless of the Firebase version
 *
 * @param ref - A storage reference
 * @param {*} keyV8 - The name of the function to call if using Firebase 8
 * @param {*} keyV9 - The name of the function to call if using Firebase 9
 * @param  {...any} params - The params to forward to the called function
 * @returns A rejected Promise if something went wrong, and the result of calling the Firebase function in any other case.
 */
const queryIsomorphicCall = (ref, keyV8, keyV9, ...params) => {
    if (!ref) return Promise.reject(new Error('No reference provided'));

    // Firebase <= 8
    if (hasOwnProperty(ref, keyV8)) {
        return ref[keyV8](...params);
    }
    // Firebase 9
    if (hasOwnProperty(firestore, 'query') && hasOwnProperty(firestore, keyV9)) {
        return firestore.query(ref, firestore[keyV9](...params));
    }
    return Promise.reject(new Error('Unable to call method'));
};

export default queryIsomorphicCall;
