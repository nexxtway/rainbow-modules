import isDate from './isDate';
import { compareDates } from './helpers';

export default function isDateInPast(date) {
    if (isDate(date)) return compareDates(date, new Date()) < 0;
    return false;
}
