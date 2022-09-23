import collection from '../../helpers/collection';
import doc from '../../helpers/doc';

const batchUpdate = ({ db, collection: collectionPath, data: docs }) => {
    const batch = db.batch();
    docs.forEach(({ id, data }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.update(docRef, data);
    });
    return batch.commit();
};

export default batchUpdate;
