import firestoreIsomorphicCall from './firestoreIsomorphicCall';

/**
 * Creates a document reference, regarldess of the Firebase SDK version.
 * @param {Firestore | CollectionReference | DocumentReference} ref A reference to a Firestore collection, document, or the Firesore instance.
 * @param {string} path
 * @returns {DocumentReference} DocumentReference
 */
export default function doc(ref, path) {
    return firestoreIsomorphicCall(ref, 'doc', 'doc', path);
}
