import collection from '../../helpers/collection';
import doc from '../../helpers/doc';

const batchAdd = ({ db, collection: collectionPath, data }) => {
    const batch = db.batch();
    data.forEach((item) => {
        const docRef = doc(collection(db, collectionPath));
        batch.set(docRef, item);
    });
    return batch.commit();
};

export default batchAdd;
