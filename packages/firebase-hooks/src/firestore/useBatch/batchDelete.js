import collection from '../../helpers/collection';
import doc from '../../helpers/doc';

const batchDelete = ({ db, collection: collectionPath, data }) => {
    const batch = db.batch();
    data.forEach(({ id }) => {
        const docRef = doc(collection(db, collectionPath), id);
        batch.delete(docRef);
    });
    return batch.commit();
};

export default batchDelete;
