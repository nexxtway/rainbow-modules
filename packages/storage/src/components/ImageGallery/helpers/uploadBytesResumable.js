import storageIsomorphicCall from './storageIsomorphicCall';

const uploadBytesResumable = (ref, data) =>
    storageIsomorphicCall(ref, 'put', 'uploadBytesResumable', data);

export default uploadBytesResumable;
