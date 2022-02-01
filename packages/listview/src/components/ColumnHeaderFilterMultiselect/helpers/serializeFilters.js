export default function serializeFilters(filters) {
    if (Array.isArray(filters)) {
        return filters.map(({ value }) => value).filter((value) => !!value);
    }

    return [];
}
