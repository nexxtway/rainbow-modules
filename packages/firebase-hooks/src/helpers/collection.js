import firestoreIsomorphicCall from './firestoreIsomorphicCall';

/**
 * Creates a collection reference, regarldess of the Firebase SDK version.
 * @param {Firestore | CollectionReference | DocumentReference} ref A reference to a Firestore collection, document, or the Firesore instance.
 * @param {string} path
 * @returns {CollectionReference} CollectionReference
 */
export default function collection(ref, path) {
    return firestoreIsomorphicCall(ref, 'collection', 'collection', path);
}
