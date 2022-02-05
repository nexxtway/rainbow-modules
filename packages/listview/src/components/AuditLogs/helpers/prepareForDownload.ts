/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from 'luxon';

const prepareForDownload = ({
    data,
    format,
}: {
    data: Record<string, any>;
    format: string;
}): Record<string, unknown> => {
    const {
        textPayload,
        severity,
        labels,
        createdAt: { seconds },
    } = data;
    const createdAt =
        seconds && !Number.isNaN(seconds) ? DateTime.fromSeconds(seconds).toISO() : '';
    if (format === 'csv') {
        return {
            severity,
            createdAt,
            textPayload,
        };
    }

    return {
        severity,
        createdAt,
        textPayload,
        labels,
    };
};

export default prepareForDownload;
