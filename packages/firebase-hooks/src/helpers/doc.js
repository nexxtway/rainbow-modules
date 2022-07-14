import { doc as fbDoc } from 'firebase/firestore';

/**
 * Creates a document reference, regarldess of the Firebase SDK version.
 * @param {Firestore | CollectionReference | DocumentReference} ref A reference to a Firestore collection, document, or the Firesore instance.
 * @param {string} path
 * @returns {DocumentReference} DocumentReference
 */
export default function doc(ref, path) {
    if (ref.doc) {
        return ref.doc(path);
    }
    return fbDoc(ref, path);
}
