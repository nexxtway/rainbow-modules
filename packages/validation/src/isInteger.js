import isNumber from './isNumber';

export default function isInteger(value) {
    return isNumber(value) && value % 1 === 0;
}
