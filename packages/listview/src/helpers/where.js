import queryIsomorphicCall from './queryIsomorphicCall';

const where = (ref, ...params) => queryIsomorphicCall(ref, 'where', 'where', ...params);

export default where;
