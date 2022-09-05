import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function getDoc(ref) {
    return firestoreIsomorphicCall(ref, 'get', 'getDoc');
}
