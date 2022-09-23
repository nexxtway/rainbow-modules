import { collection as fbCollection, collectionGroup } from 'firebase/firestore';
import getFirestore from '../../../helpers/getFirestore';

export default function getCollection(app, collection, isCollectionGroup) {
    const firestore = getFirestore(app);
    const key = isCollectionGroup ? 'collectionGroup' : 'collection';
    if (firestore[key]) {
        return firestore[key](collection);
    }
    return isCollectionGroup ? collectionGroup(collection) : fbCollection(collection);
}
