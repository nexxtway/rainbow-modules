import { collection, collectionGroup } from 'firebase/firestore';

export default function getCollection(firestore, path, isCollectionGroup) {
    return isCollectionGroup ? collectionGroup(firestore, path) : collection(firestore, path);
}
