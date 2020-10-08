import { useRef, useEffect, useCallback } from 'react';

export default function useWindowScrolling(callback, isListening) {
    const isTicking = useRef(false);

    const listener = useCallback(
        (event) => {
            if (!isTicking.current) {
                window.requestAnimationFrame(() => {
                    callback(event);
                    isTicking.current = false;
                });
                isTicking.current = true;
            }
        },
        [callback],
    );

    useEffect(() => {
        if (isListening) {
            window.addEventListener('scroll', listener);
            window.addEventListener('wheel', listener);
        }

        return () => {
            window.removeEventListener('scroll', listener);
            window.removeEventListener('wheel', listener);
        };
    }, [listener, isListening]);
}
