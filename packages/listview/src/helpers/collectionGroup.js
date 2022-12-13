import firestoreIsomorphicCall from './firestoreIsomorphicCall';

const collectionGroup = (ref, path) =>
    firestoreIsomorphicCall(ref, 'collectionGroup', 'collectionGroup', path);

export default collectionGroup;
