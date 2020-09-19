import { useEffect, useState } from 'react';
import useStorageRef from './useStorageRef';

export default function useImageRefs(props) {
    const { path, filter, maxResults: maxResultsProp, onError } = props;
    const storageRef = useStorageRef();
    const [imageRefs, setImageRefs] = useState([]);

    useEffect(() => {
        const maxResults = maxResultsProp >= 0 ? maxResultsProp : 1000;
        let isSubscribed = true;
        if (Array.isArray(filter)) {
            const imagesFiltered = filter.map((name) => storageRef.child(`${path}/${name}`));
            setImageRefs(imagesFiltered.slice(0, maxResults));
        } else if (typeof filter === 'function') {
            storageRef
                .child(path)
                .listAll()
                .then(({ items }) => {
                    if (isSubscribed) {
                        const filteredList = items.filter((ref) => filter(ref));
                        setImageRefs(filteredList.slice(0, maxResults));
                    }
                })
                .catch((error) => {
                    if (isSubscribed) {
                        onError(error);
                        setImageRefs([]);
                    }
                });
        } else {
            storageRef
                .child(path)
                .list({ maxResults })
                .then(({ items }) => {
                    if (isSubscribed) {
                        setImageRefs(items);
                    }
                })
                .catch((error) => {
                    if (isSubscribed) {
                        onError(error);
                        setImageRefs([]);
                    }
                });
        }

        return () => {
            isSubscribed = false;
        };
    }, [path, filter, storageRef, onError, maxResultsProp]);

    return [imageRefs, setImageRefs];
}
