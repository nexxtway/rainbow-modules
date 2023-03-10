import { getMetadata } from 'firebase/storage';

const attachMetadata = async (items) => {
    return Promise.all(
        items.map(async (fileRef) => {
            const metadata = await getMetadata(fileRef);
            // eslint-disable-next-line no-param-reassign
            fileRef.metadata = metadata;
            return fileRef;
        }),
    );
};

export default attachMetadata;
