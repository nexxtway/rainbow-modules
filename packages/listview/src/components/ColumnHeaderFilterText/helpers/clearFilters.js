export default function clearFilters(filters) {
    if (Array.isArray(filters)) {
        return filters.filter((value) => !!value && value.trim() !== '');
    }
    return [];
}
