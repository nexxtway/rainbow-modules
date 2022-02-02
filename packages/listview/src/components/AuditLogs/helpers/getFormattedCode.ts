import { DateTime } from 'luxon';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFormattedCode = (row: Record<string, any>): string => {
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
