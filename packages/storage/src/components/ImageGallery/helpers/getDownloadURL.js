import storageIsomorphicCall from './storageIsomorphicCall';

const getDownloadURL = (ref) => storageIsomorphicCall(ref, 'getDownloadURL', 'getDownloadURL');

export default getDownloadURL;
