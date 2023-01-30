import { collection, doc, writeBatch } from 'firebase/firestore';

const batchDelete = ({ db, collection: collectionPath, data }) => {
    const batch = writeBatch(db);
    data.forEach(({ id }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.delete(docRef);
    });
    return batch.commit();
};

export default batchDelete;
