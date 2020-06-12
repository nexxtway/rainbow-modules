export default function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}
