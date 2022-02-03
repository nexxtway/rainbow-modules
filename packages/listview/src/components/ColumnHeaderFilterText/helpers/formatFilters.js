export default function formatFilters(filters) {
    if (Array.isArray(filters) && filters.length > 0) {
        return filters;
    }
    return [''];
}
