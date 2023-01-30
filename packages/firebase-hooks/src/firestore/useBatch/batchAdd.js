import { collection, doc, writeBatch } from 'firebase/firestore';

const batchAdd = ({ db, collection: collectionPath, data }) => {
    const batch = writeBatch(db);
    data.forEach((item) => {
        const docRef = doc(collection(db, collectionPath));
        batch.set(docRef, item);
    });
    return batch.commit();
};

export default batchAdd;
