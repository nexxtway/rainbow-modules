import { DateTime } from 'luxon';

const getCurrentMonth = (): [Date, Date] => {
    const currentDate = DateTime.now();

    const monthStart = currentDate.startOf('month');
    const monthEnd = currentDate.endOf('month');

    return [monthStart.toJSDate(), monthEnd.toJSDate()];
};

export default getCurrentMonth;
