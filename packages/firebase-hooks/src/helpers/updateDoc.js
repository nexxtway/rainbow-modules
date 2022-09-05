import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function updateDoc(ref, data, options) {
    return firestoreIsomorphicCall(ref, 'update', 'updateDoc', data, options);
}
