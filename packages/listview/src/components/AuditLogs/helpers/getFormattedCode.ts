/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DateTime } from 'luxon';

const getFormattedCode = ({ id, ...row }: Record<string, any>): string => {
    const {
        createdAt: { seconds },
    } = row;
    const obj =
        seconds && !Number.isNaN(seconds)
            ? {
                  ...row,
                  createdAt: DateTime.fromSeconds(seconds).toLocaleString(DateTime.DATETIME_SHORT),
              }
            : row;

    return JSON.stringify(obj, undefined, 2);
};

export default getFormattedCode;
