const batchUpdate = ({ db, collection, data: docs }) => {
    const batch = db.batch();
    docs.forEach(({ id, data }) => {
        const docRef = db.collection(collection).doc(id);
        batch.update(docRef, data);
    });
    return batch.commit();
};

export default batchUpdate;
