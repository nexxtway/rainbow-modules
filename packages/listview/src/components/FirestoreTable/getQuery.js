import { query, orderBy } from 'firebase/firestore';

export default function getQuery({ query: queryFn, sortedBy, sortDirection }) {
    if (typeof queryFn === 'function') {
        if (typeof sortedBy === 'string') {
            return (ref) => query(queryFn(ref), orderBy(sortedBy, sortDirection));
        }
        return queryFn;
    }
    if (typeof sortedBy === 'string') {
        return (ref) => query(queryFn(ref), orderBy(sortedBy, sortDirection));
    }
    return undefined;
}
