export default function isValidStorageObjectPath(value) {
    return String(value)
        .split('/')
        .every((subPath) => !['.', '..'].includes(subPath) && !/\n/.test(subPath));
}
