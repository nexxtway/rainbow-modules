export default function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
}
