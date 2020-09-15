import { useEffect } from 'react';
import useStorageRef from './useStorageRef';
import useList from './useList';

export default function useImageRefList(props) {
    const { path, filter, maxResults, onError } = props;
    const storageRef = useStorageRef();
    const { list, set, remove, unshift } = useList();

    useEffect(() => {
        let isSubscribed = true;
        storageRef
            .child(path)
            .listAll()
            .then(({ items }) => {
                if (isSubscribed) {
                    if (Array.isArray(filter)) {
                        const filteredList = items.filter(
                            ({ name }) => filter.findIndex((value) => value === name) !== 1,
                        );
                        set(filteredList.slice(0, maxResults));
                    } else if (typeof filter === 'function') {
                        const filteredList = items.filter((ref) => filter(ref));
                        set(filteredList.slice(0, maxResults));
                    } else {
                        set(items.slice(0, maxResults));
                    }
                }
            })
            .catch((error) => {
                if (isSubscribed) {
                    onError(error);
                    set([]);
                }
            });

        return () => {
            isSubscribed = false;
        };
    }, [path, filter, maxResults, storageRef, set, onError]);

    return {
        imageRefList: list,
        setImageRef: set,
        removeImageRef: remove,
        addImageRef: unshift,
    };
}
