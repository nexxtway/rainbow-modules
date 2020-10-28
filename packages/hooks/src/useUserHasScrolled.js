import { useRef, useState, useEffect, useCallback } from 'react';
import { getDefaultScrollTarget, getDefaultScrollTrigger } from './helpers';

export default function useUserHasScrolled(options = {}, isListening = true) {
    const {
        target = getDefaultScrollTarget(),
        triggerFn = getDefaultScrollTrigger,
        ...otherOptions
    } = options;
    const scroll = useRef();
    const isTicking = useRef(false);
    const [scrollTriggered, setScrollTriggered] = useState(() =>
        triggerFn(null, scroll, otherOptions),
    );

    const listener = useCallback(() => {
        if (!isTicking.current) {
            window.requestAnimationFrame(() => {
                setScrollTriggered(triggerFn(target, scroll, otherOptions));
                isTicking.current = false;
            });
            isTicking.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(otherOptions), target, triggerFn]);

    useEffect(() => {
        if (isListening) {
            window.addEventListener('scroll', listener);
            window.addEventListener('wheel', listener);
            setScrollTriggered(false);
        }

        return () => {
            window.removeEventListener('scroll', listener);
            window.removeEventListener('wheel', listener);
        };
    }, [listener, isListening]);

    return scrollTriggered;
}
