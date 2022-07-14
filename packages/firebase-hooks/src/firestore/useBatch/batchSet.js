import collection from '../../helpers/collection';
import doc from '../../helpers/doc';

const batchSet = ({ db, collection: collectionPath, data: docs, options }) => {
    const batch = db.batch();
    docs.forEach(({ id, data }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.set(docRef, data, options);
    });
    return batch.commit();
};

export default batchSet;
