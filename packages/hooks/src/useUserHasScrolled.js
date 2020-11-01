import { useRef, useState, useEffect } from 'react';
import useWindowScrolling from './useWindowScrolling';
import {
    getDefaultScrollTarget,
    getDefaultScrollTrigger,
    getTargetScrollPosition,
} from './helpers';

export default function useUserHasScrolled(options = {}, isListening = true) {
    const {
        target = getDefaultScrollTarget(),
        triggerFn = getDefaultScrollTrigger,
        ...otherOptions
    } = options;
    const scroll = useRef();
    const [scrollTriggered, setScrollTriggered] = useState(false);

    useWindowScrolling(() => {
        if (isListening) {
            setScrollTriggered(triggerFn(target, scroll.current, otherOptions));
        }
    }, isListening);

    useEffect(() => {
        if (isListening) {
            scroll.current = getTargetScrollPosition(target);
            setScrollTriggered(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isListening]);

    return scrollTriggered;
}
