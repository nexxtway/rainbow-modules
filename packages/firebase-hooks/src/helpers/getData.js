export default function getData(docs, onlyIds) {
    if (onlyIds) {
        return docs.map((doc) => doc.id);
    }
    return docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
    }));
}
