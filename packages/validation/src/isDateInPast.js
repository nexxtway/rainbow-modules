import isDate from './isDate';
import { compareDates } from './helpers';

export default function isDateInPast(date) {
    return isDate(date) && compareDates(date, new Date()) < 0;
}
