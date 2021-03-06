import isFirestorePath from './isFirestorePath';
import splitPath from './helpers/splitPath';

export default function isFirestoreDocumentPath(value) {
    if (isFirestorePath(value)) {
        const parts = splitPath(value);
        return parts.length % 2 === 0;
    }
    return false;
}
