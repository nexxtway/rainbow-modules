export default function serializeFilters(filters) {
    if (Array.isArray(filters)) {
        return filters.filter((option) => option && option.value).map(({ value }) => value);
    }

    return [];
}
