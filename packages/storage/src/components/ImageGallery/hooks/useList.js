import { useState, useEffect, useCallback } from 'react';

export default function useList(initial) {
    const [list, set] = useState([]);
    useEffect(() => {
        if (Array.isArray(initial)) {
            set(initial);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const remove = useCallback((element) => {
        set((list) => {
            return list.filter((value) => value !== element);
        });
    }, []);

    const unshift = useCallback((imageRef) => {
        set((list) => {
            list.unshift(imageRef);
            return list;
        });
    }, []);

    const put = useCallback((imageRef) => {
        set((list) => {
            list.put(imageRef);
            return list;
        });
    }, []);

    return { list, set, remove, unshift, put };
}
