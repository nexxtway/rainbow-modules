import isNullOrUndefined from './isNullOrUndefined';
import isEmptyString from './isEmptyString';
import isEmptyArray from './isEmptyArray';
import isEmptyObject from './isEmptyObject';

export default function isEmpty(value) {
    return (
        isNullOrUndefined(value) ||
        isEmptyString(value) ||
        isEmptyArray(value) ||
        isEmptyObject(value)
    );
}
