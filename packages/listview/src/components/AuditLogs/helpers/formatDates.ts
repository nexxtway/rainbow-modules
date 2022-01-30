const formatDates = (dates: Date[]): string => {
    if (dates) {
        const startDay = new Intl.DateTimeFormat().format(dates[0]);
        if (dates.length > 1) {
            const endDay = new Intl.DateTimeFormat().format(dates[1]);
            return `${startDay} - ${endDay}`;
        }
        return startDay;
    }
    return '';
};

export default formatDates;
