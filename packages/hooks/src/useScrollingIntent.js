import { useEffect, useRef } from 'react';
import useWindowScrolling from './useWindowScrolling';

const resolveElementRef = (ref) => {
    if (typeof ref === 'function') {
        const ret = ref();
        return ret && ret.current;
    }
    return ref && ref.current;
};

export default function useScrollingIntent(params) {
    const { callback, isListening, triggerElementRef, threshold = 20 } = params;
    const horizontalPosition = useRef();
    const verticalPosition = useRef();

    useEffect(() => {
        if (isListening) {
            if (triggerElementRef) {
                const target = resolveElementRef(triggerElementRef);
                const { top, left } = target.getBoundingClientRect();
                verticalPosition.current = top;
                horizontalPosition.current = left;
            } else {
                verticalPosition.current = window.scrollY;
                horizontalPosition.current = window.scrollX;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isListening]);

    useWindowScrolling((event) => {
        if (triggerElementRef) {
            const target = resolveElementRef(triggerElementRef);
            const { top, left } = target.getBoundingClientRect();
            const hasScrolledVertically = Math.abs(top - verticalPosition.current) > threshold;
            const hasScrolledHorizontally = Math.abs(left - horizontalPosition.current) > threshold;
            if (hasScrolledVertically || hasScrolledHorizontally) {
                callback(event);
            }
        } else {
            const hasScrolledVertically =
                Math.abs(window.scrollY - verticalPosition.current) > threshold;
            const hasScrolledHorizontally =
                Math.abs(window.scrollX - horizontalPosition.current) > threshold;
            if (hasScrolledVertically || hasScrolledHorizontally) {
                callback(event);
            }
        }
    }, isListening);
}
