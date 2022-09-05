import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function setDoc(ref, data, options) {
    return firestoreIsomorphicCall(ref, 'set', 'setDoc', data, options);
}
