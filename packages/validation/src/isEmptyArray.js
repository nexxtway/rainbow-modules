export default function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
}
