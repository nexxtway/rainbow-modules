import isEmpty from '../isEmpty';

export default function splitPath(path) {
    if (isEmpty(path)) return [];
    return path.split('/').reduce((res, el) => (el === '' ? res : [...res, el]), []);
}
