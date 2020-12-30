const batchSet = ({ db, collection, data: docs, options }) => {
    const batch = db.batch();
    docs.forEach(({ id, data }) => {
        const docRef = db.collection(collection).doc(id);
        batch.set(docRef, data, options);
    });
    return batch.commit();
};

export default batchSet;
