export default function getData(docs, onlyIds, flat) {
    if (onlyIds) {
        return docs.map((doc) => doc.id);
    }
    if (flat) {
        return docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    }
    return docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
    }));
}
