import storageIsomorphicCall from './storageIsomorphicCall';

const deleteObject = (ref) => storageIsomorphicCall(ref, 'delete', 'deleteObject');

export default deleteObject;
