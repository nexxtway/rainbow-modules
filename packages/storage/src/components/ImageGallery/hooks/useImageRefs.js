import { useEffect, useState } from 'react';
import useStorageRef from './useStorageRef';
import { attachMetadata, sortByDate, ref, getDownloadURL, listAll, list } from '../helpers';

export default function useImageRefs(props) {
    const { path, filter, maxResults: maxResultsProp, onError } = props;
    const storageRef = useStorageRef();
    const [imageRefs, setImageRefs] = useState([]);

    useEffect(() => {
        const maxResults = maxResultsProp >= 0 ? maxResultsProp : 1000;
        (async () => {
            if (Array.isArray(filter)) {
                const imagesFiltered = [];
                await Promise.all(
                    filter.map(async (name) => {
                        try {
                            const imageRef = await ref(storageRef, `${path}/${name}`);
                            await getDownloadURL(imageRef);
                            imagesFiltered.push(imageRef);
                        } catch (error) {
                            onError(error);
                        }
                    }),
                );
                setImageRefs(await attachMetadata(imagesFiltered.slice(0, maxResults)));
            } else if (typeof filter === 'function') {
                try {
                    const imagesRef = await ref(storageRef, path);
                    const { items } = await listAll(imagesRef);
                    const filteredList = items.filter((ref) => filter(ref)).slice(0, maxResults);
                    setImageRefs(await sortByDate(await attachMetadata(filteredList)));
                } catch (error) {
                    onError(error);
                    setImageRefs([]);
                }
            } else {
                try {
                    const imagesRef = await ref(storageRef, path);
                    const { items } = await list(imagesRef, { maxResults });
                    setImageRefs(await sortByDate(await attachMetadata(items)));
                } catch (error) {
                    onError(error);
                    setImageRefs([]);
                }
            }
        })();
    }, [path, filter, storageRef, onError, maxResultsProp]);

    return [imageRefs, setImageRefs];
}
