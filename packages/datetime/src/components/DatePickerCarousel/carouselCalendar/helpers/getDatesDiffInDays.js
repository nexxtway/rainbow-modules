export default function getDatesDiffInDays(minDate, maxDate) {
    const date1 = new Date(minDate).setHours(0, 0, 0, 0);
    const date2 = new Date(maxDate).setHours(0, 0, 0, 0);
    return Math.ceil((Math.abs(date2 - date1) / 1000) * 60 * 60 * 24);
}
