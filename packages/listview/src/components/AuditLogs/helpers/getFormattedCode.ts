import { DateTime } from 'luxon';

const getFormattedCode = (row: any): string => {
    const {
        date: { seconds },
    } = row;
    const obj =
        seconds && !Number.isNaN(seconds)
            ? {
                  ...row,
                  date: DateTime.fromSeconds(seconds).toLocaleString(DateTime.DATETIME_SHORT),
              }
            : row;

    return JSON.stringify(obj, undefined, 2);
};

export default getFormattedCode;
