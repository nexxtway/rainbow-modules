import isDate from './isDate';
import { compareDates } from './helpers';

export default function isDateInFuture(date) {
    return isDate(date) && compareDates(date, new Date()) > 0;
}
