import queryIsomorphicCall from './queryIsomorphicCall';

const limit = (ref, limitProp) => queryIsomorphicCall(ref, 'limit', 'limit', limitProp);

export default limit;
