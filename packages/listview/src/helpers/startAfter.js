import queryIsomorphicCall from './queryIsomorphicCall';

const startAfter = (ref, start) => queryIsomorphicCall(ref, 'startAfter', 'startAfter', start);

export default startAfter;
