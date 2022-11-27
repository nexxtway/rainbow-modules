import storageIsomorphicCall from './storageIsomorphicCall';

const listAll = (ref) => storageIsomorphicCall(ref, 'listAll', 'listAll');

export default listAll;
