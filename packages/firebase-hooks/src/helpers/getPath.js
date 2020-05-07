export default function getPath(path, ...args) {
    if (typeof path === 'function') {
        return path(...args);
    }
    return path;
}
