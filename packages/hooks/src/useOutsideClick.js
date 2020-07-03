import { useEffect, useCallback } from 'react';
import isDomElement from './helpers/isDomElement';

export default function useOutsideClick(ref, handler, isListening = true) {
    const listener = useCallback(
        (event) => {
            if (ref && isDomElement(ref.current) && !ref.current.contains(event.target)) {
                handler(event);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [ref],
    );

    useEffect(() => {
        if (isListening) {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
        }

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [isListening, listener]);
}
