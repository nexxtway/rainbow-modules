import isEmpty from './isEmpty';
import isNumber from './isNumber';

export default function isDate(value) {
    if (isEmpty(value) || isNumber(value)) return false;

    if (isNumber(Date.parse(value))) return true;

    const date = new Date(value);
    if (isNumber(date.getTime())) return true;

    return false;
}
