import getSign from './getSign';

export default function compareDates(value1, value2) {
    const date1 = new Date(value1);
    const date2 = new Date(value2);
    return getSign(date1 - date2);
}
