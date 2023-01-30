import { collection, doc, writeBatch } from 'firebase/firestore';

const batchSet = ({ db, collection: collectionPath, data: docs, options }) => {
    const batch = writeBatch(db);
    docs.forEach(({ id, data }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.set(docRef, data, options);
    });
    return batch.commit();
};

export default batchSet;
