import storageIsomorphicCall from './storageIsomorphicCall';

const list = (ref, options) => storageIsomorphicCall(ref, 'list', 'list', options);

export default list;
