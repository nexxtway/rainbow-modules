import { collection, collectionGroup } from '../../../helpers';

export default function getCollection(firestore, path, isCollectionGroup) {
    return isCollectionGroup ? collectionGroup(firestore, path) : collection(firestore, path);
}
