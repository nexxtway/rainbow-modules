const batchAdd = ({ db, collection, data }) => {
    const batch = db.batch();
    data.forEach((item) => {
        const docRef = db.collection(collection).doc();
        batch.set(docRef, item);
    });
    return batch.commit();
};

export default batchAdd;
