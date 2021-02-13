const getDocData = (doc, flat) => {
    if (flat) {
        return {
            ...doc.data(),
            id: doc.id,
        };
    }
    return {
        id: doc.id,
        data: doc.data(),
    };
};

export default getDocData;
