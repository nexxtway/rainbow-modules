import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function deleteDoc(ref) {
    return firestoreIsomorphicCall(ref, 'delete', 'deleteDoc');
}
