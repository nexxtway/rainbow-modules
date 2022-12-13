import queryIsomorphicCall from './queryIsomorphicCall';

const startAt = (ref, start) => queryIsomorphicCall(ref, 'startAt', 'startAt', start);

export default startAt;
