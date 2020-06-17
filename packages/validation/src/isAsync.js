import isPromise from './isPromise';
import isFunction from './isFunction';

export default function isAsync(value) {
    return isPromise(value) || (isFunction(value) && value() instanceof Promise);
}
