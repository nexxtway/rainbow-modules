export default function formatFilters(filters) {
    const formattedFilters = filters.map((value) => ({ value }));

    if (formattedFilters.length === 0) {
        return { texts: [null] };
    }
    return { texts: formattedFilters };
}
