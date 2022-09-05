import * as firestore from 'firebase/firestore';
import getCallableKey from './getCallableKey';

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
