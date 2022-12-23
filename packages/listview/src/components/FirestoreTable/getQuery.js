import { orderBy } from '../../helpers';

export default function getQuery({ query, sortedBy, sortDirection }) {
    if (typeof query === 'function') {
        if (typeof sortedBy === 'string') {
            return (ref) => orderBy(query(ref), sortedBy, sortDirection);
        }
        return query;
    }
    if (typeof sortedBy === 'string') {
        return (ref) => orderBy(ref, sortedBy, sortDirection);
    }
    return undefined;
}
