import isNull from './isNull';
import isUndefined from './isUndefined';
import isEmptyString from './isEmptyString';
import isEmptyArray from './isEmptyArray';
import isEmptyObject from './isEmptyObject';

export default function isEmpty(value) {
    return (
        isNull(value) ||
        isUndefined(value) ||
        isEmptyString(value) ||
        isEmptyArray(value) ||
        isEmptyObject(value)
    );
}
