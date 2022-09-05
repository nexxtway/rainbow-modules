import firestoreIsomorphicCall from './firestoreIsomorphicCall';

export default function writeBatch(db) {
    return firestoreIsomorphicCall(db, 'batch', 'writeBatch');
}
