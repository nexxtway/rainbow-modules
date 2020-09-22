import { useEffect, useState } from 'react';
import useStorageRef from './useStorageRef';

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
                        const imageRef = storageRef.child(`${path}/${name}`);
                        await imageRef
                            .getDownloadURL()
                            .then(() => {
                                imagesFiltered.push(imageRef);
                            })
                            .catch((error) => {
                                onError(error);
                            });
                    }),
                );
                setImageRefs(imagesFiltered.slice(0, maxResults));
            } else if (typeof filter === 'function') {
                await storageRef
                    .child(path)
                    .listAll()
                    .then(({ items }) => {
                        const filteredList = items.filter((ref) => filter(ref));
                        setImageRefs(filteredList.slice(0, maxResults));
                    })
                    .catch((error) => {
                        onError(error);
                        setImageRefs([]);
                    });
            } else {
                await await storageRef
                    .child(path)
                    .list({ maxResults })
                    .then(({ items }) => {
                        setImageRefs(items);
                    })
                    .catch((error) => {
                        onError(error);
                        setImageRefs([]);
                    });
            }
        })();
    }, [path, filter, storageRef, onError, maxResultsProp]);

    return [imageRefs, setImageRefs];
}
