import isEmpty from './isEmpty';
import splitPath from './helpers/splitPath';

const pathElementValidationRegex = [
    /^[^{|^}][\w|\-|+|_|%]{1,1500}$/gi,
    /^\{[\w|\-|+|_|%]{1,1500}\}$/gi,
];
const isValidPath = (str) => /^\/?(?:[^/]{1,1500})(?:\/[^/]{1,1500})*$/gi.test(str);

export default function isFirestorePath(value) {
    if (isEmpty(value)) return false;
    if (isValidPath(value)) {
        const parts = splitPath(value);
        return parts.every((el) => pathElementValidationRegex.some((regex) => regex.test(el)));
    }
    return false;
}
