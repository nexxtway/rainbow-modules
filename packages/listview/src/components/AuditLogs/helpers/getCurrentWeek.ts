import { DateTime } from 'luxon';

const getCurrentWeek = (): [Date, Date] => {
    const currentDate = DateTime.now();
    const weekStart = currentDate.startOf('week');
    const weekEnd = currentDate.endOf('week');

    return [weekStart.toJSDate(), weekEnd.toJSDate()];
};

export default getCurrentWeek;
