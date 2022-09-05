import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function onSnapshot(ref, callback, errorCallback) {
    if (!ref) return () => {};

    return firestoreIsomorphicCall(ref, 'onSnapshot', 'onSnapshot', callback, errorCallback);
}
