import splitPath from './helpers/splitPath';

const isIdentifier = (str) => /[\w|\-|+|_|%]{1,1500}$/gi.test(str);
const isParameter = (str) => /\{[\w|\-|+|_|%]{1,1500}\}$/gi.test(str);
const isValidPath = (str) => /^\/?(?:[^/]{1,1500})(?:\/[^/]{1,1500})*$/gi.test(str);

export default function isFirestorePath(value) {
    if (isValidPath(value)) {
        const parts = splitPath(value);
        return parts.every((el) => isIdentifier(el) || isParameter(el));
    }
    return false;
}
