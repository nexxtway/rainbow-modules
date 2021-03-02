import isFirestorePath from './isFirestorePath';
import splitPath from './helpers/splitPath';

export default function isFirestoreCollection(value) {
    if (isFirestorePath(value)) {
        const parts = splitPath(value);
        return parts.length % 2 === 1;
    }
    return false;
}
