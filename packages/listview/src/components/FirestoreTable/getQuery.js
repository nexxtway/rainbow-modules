export default function getQuery({ query, sortedBy, sortDirection }) {
    if (typeof query === 'function') {
        if (typeof sortedBy === 'string') {
            return (ref) => query(ref).orderBy(sortedBy, sortDirection);
        }
        return query;
    }
    if (typeof sortedBy === 'string') {
        return (ref) => ref.orderBy(sortedBy, sortDirection);
    }
    return undefined;
}
