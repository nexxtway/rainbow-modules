import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function getDocs(query) {
    return firestoreIsomorphicCall(query, 'get', 'getDocs');
}
