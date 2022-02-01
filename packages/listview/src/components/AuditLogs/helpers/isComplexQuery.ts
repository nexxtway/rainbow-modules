import { Filters } from '../types';

const isComplexQuery = (filters: Filters): boolean => {
    const { severity, labels } = filters;
    const hasSeverity = severity && severity.length > 0;

    const labelKeys = labels ? Object.keys(labels) : [];
    const labelsRequiringInClause = labelKeys.reduce((acc, key) => {
        if (labels && Array.isArray(labels[key]) && labels[key].length > 1) return acc + 1;
        return acc;
    }, 0);

    return Boolean(labelsRequiringInClause > 1 || (hasSeverity && labelsRequiringInClause > 0));
};

export default isComplexQuery;
