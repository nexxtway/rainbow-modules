export const attachMetadata = async (items) => {
    return Promise.all(
        items.map(async (fileRef) => {
            const metadata = await fileRef.getMetadata();
            // eslint-disable-next-line no-param-reassign
            fileRef.metadata = metadata;
            return fileRef;
        }),
    );
};

export const sortByDate = async (items) => {
    return items.sort((a, b) => {
        return new Date(b.metadata.timeCreated) - new Date(a.metadata.timeCreated);
    });
};
