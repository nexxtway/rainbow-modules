export default function isArray(value) {
    return {}.toString.call(value) === '[object Array]';
}
