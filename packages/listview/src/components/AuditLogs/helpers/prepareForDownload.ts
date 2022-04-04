/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from 'luxon';

const prepareForDownload = ({
    data,
    format,
}: {
    data: Record<string, any>[];
    format: string;
}): Record<string, unknown>[] => {
    return data.map<Record<string, any>>((label) => {
        const {
            textPayload,
            severity,
            labels,
            createdAt: { seconds },
        } = label;
        const createdAt =
            seconds && !Number.isNaN(seconds) ? DateTime.fromSeconds(seconds).toISO() : '';

        if (format === 'csv') {
            const allLabels = data.reduce((acc: string[], currentValue) => {
                const jointArray = [...acc, ...Object.keys(currentValue.labels)];
                return jointArray.filter((item, index) => jointArray.indexOf(item) === index);
            }, []);
            const labelsObj = allLabels.reduce((acc: Record<string, unknown>, currentItem) => {
                return { ...acc, [`label.${currentItem}`]: labels[currentItem] || '' };
            }, {});
            return {
                severity,
                createdAt,
                textPayload,
                ...labelsObj,
            };
        }

        return {
            severity,
            createdAt,
            textPayload,
            labels,
        };
    });
};

export default prepareForDownload;
