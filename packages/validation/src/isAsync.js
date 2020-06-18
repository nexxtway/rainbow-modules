import isPromise from './isPromise';
import isFunction from './isFunction';

export default function isAsync(value) {
    return (
        isPromise(value) ||
        (isFunction(value) && /return new Promise|asyncGeneratorStep/.test(value.toString().trim()))
    );
}
