import storageIsomorphicCall from './storageIsomorphicCall';

const ref = (storageOrRef, path) => storageIsomorphicCall(storageOrRef, 'child', 'ref', path);

export default ref;
