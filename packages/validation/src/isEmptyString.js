export default function isEmptyString(value) {
    return typeof value === 'string' && value.replace(/\s+/, '').length === 0;
}
