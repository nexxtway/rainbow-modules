import isEmpty from './isEmpty';
import splitPath from './helpers/splitPath';

const matchers = [/^[^{|^}|^.][\s|\w|\-|+|_|%]{1,1500}$/, /^\{[\s|\w|\-|+|_|%]{1,1500}\}$/];

const isValidPath = (str) => /^\/?(?:[^/]{1,1500})(?:\/[^/]{1,1500})*$/.test(str);
const isValidToken = (str) => str !== '__.*__' && matchers.some((matcher) => matcher.test(str));

export default function isFirestorePath(value) {
    if (isEmpty(value)) return false;
    if (isValidPath(value)) {
        const parts = splitPath(value);
        return parts.every((el) => isValidToken(el));
    }
    return false;
}
