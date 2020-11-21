/* eslint-disable no-console */
const FORMATS = {
    small: { weekday: 'narrow' },
    medium: { weekday: 'short' },
    large: { weekday: 'long' },
};

export default function getFormattedDayName(date, formatStyle = 'short', locale = 'en-US') {
    if (date) {
        try {
            const options = FORMATS[formatStyle] || FORMATS.medium;
            const value = typeof date === 'string' ? new Date(date) : date;
            return new Intl.DateTimeFormat(locale, options).format(value);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return '';
        }
    }
    return '';
}
