const batchDelete = ({ db, collection, data }) => {
    const batch = db.batch();
    data.forEach(({ id }) => {
        const docRef = db.collection(collection).doc(id);
        batch.delete(docRef);
    });
    return batch.commit();
};

export default batchDelete;
