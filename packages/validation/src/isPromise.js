export default function isPromise(value) {
    return Promise.resolve(value) === value;
}
