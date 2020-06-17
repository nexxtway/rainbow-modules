export default function isEmptyObject(value) {
    return typeof value === 'object' && JSON.stringify(value) === '{}';
}
