import { DateTime } from 'luxon';

const getCustomDates = (dateRange: string): [Date, Date] => {
    const parts = dateRange.split('-').map((p) => p.trim());

    const dateStart = DateTime.fromJSDate(new Date(parts[0]));
    const dateEnd =
        parts.length > 1
            ? DateTime.fromJSDate(new Date(parts[1])).endOf('day')
            : DateTime.now().endOf('day');

    return [dateStart.toJSDate(), dateEnd.toJSDate()];
};

export default getCustomDates;
