import { useEffect, useCallback } from 'react';
import { getTarget, isDomElement } from './helpers';

export default function useOutsideClick(target, onOutsideClick, isListening = true) {
    const listener = useCallback(
        (event) => {
            const targetElement = getTarget(target);
            if (isDomElement(targetElement) && !targetElement.contains(event.target)) {
                onOutsideClick(event);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [target],
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
