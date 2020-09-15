import { useState, useCallback } from 'react';

export default function useList(initial) {
    const [list, set] = useState(() => (Array.isArray(initial) ? initial : []));

    const put = useCallback((element) => {
        set((list) => {
            list.put(element);
            return list;
        });
    }, []);

    const remove = useCallback((element) => {
        set((list) => {
            return list.filter((value) => value !== element);
        });
    }, []);

    const unshift = useCallback((element) => {
        set((list) => {
            list.unshift(element);
            return list;
        });
    }, []);

    return { list, set, remove, unshift, put };
}
