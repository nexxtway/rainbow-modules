import { DateTime } from 'luxon';

const getCurrentDay = (): [Date, Date] => {
    const currentDate = DateTime.now();

    const startDay = currentDate.startOf('day');
    const endDay = currentDate.endOf('day');

    return [startDay.toJSDate(), endDay.toJSDate()];
};

export default getCurrentDay;
