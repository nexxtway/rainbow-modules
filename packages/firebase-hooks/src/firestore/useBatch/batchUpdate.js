import { collection, doc, writeBatch } from 'firebase/firestore';

const batchUpdate = ({ db, collection: collectionPath, data: docs }) => {
    const batch = writeBatch(db);
    docs.forEach(({ id, data }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.update(docRef, data);
    });
    return batch.commit();
};

export default batchUpdate;
