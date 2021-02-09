const defaultOptions = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/New_York',
};

const getFormattedDateTime = (params) => {
    const { date, locale = 'en-US', timeZone, options = defaultOptions } = params;
    if (date) {
        try {
            const currentoptions = {
                ...options,
                timeZone,
            };
            return new Intl.DateTimeFormat(locale, currentoptions).format(new Date(date));
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return '';
        }
    }
    return '';
};

export default getFormattedDateTime;
