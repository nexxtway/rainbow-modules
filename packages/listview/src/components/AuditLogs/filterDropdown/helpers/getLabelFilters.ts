import { LabelFilter } from '../../types';

const getLabelFilters = (labels: Record<string, string[]>): LabelFilter[] => {
    const labelFilters: LabelFilter[] = [];
    Object.keys(labels).forEach((key) => {
        const values = labels[key];
        values.forEach((value, index) => {
            labelFilters.push({
                name: key,
                value,
                index,
            });
        });
    });

    return labelFilters;
};

export default getLabelFilters;
