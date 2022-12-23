import queryIsomorphicCall from './queryIsomorphicCall';

const orderBy = (ref, sortedBy, sortDirection) =>
    queryIsomorphicCall(ref, 'orderBy', 'orderBy', sortedBy, sortDirection);

export default orderBy;
