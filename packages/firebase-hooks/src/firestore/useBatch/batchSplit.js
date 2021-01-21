const batchSplit = ({ db, collection, data, action, options }) => {
    if (data.length <= 500) {
        return action({ db, collection, data, options });
    }
    const first500 = data.slice(0, 500);
    const rest = data.slice(500, data.length);
    return Promise.all([
        batchSplit({ db, collection, data: first500, action, options }),
        batchSplit({ db, collection, data: rest, action, options }),
    ]);
};

export default batchSplit;
