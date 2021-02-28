export default function splitPath(path) {
    return path.split('/').reduce((res, el) => (el === '' ? res : [...res, el]), []);
}
