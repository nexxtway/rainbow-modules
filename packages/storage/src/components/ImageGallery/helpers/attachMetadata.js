import storageIsomorphicCall from './storageIsomorphicCall';

const attachMetadata = async (items) => {
    return Promise.all(
        items.map(async (fileRef) => {
            const metadata = await storageIsomorphicCall(fileRef, 'getMetadata', 'getMetadata');
            // eslint-disable-next-line no-param-reassign
            fileRef.metadata = metadata;
            return fileRef;
        }),
    );
};

export default attachMetadata;
