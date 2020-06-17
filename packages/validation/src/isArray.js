export default function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
