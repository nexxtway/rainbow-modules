import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function addDoc(ref, data) {
    return firestoreIsomorphicCall(ref, 'add', 'addDoc', data);
}
