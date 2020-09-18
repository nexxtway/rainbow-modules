import { useRef, useState, useCallback, useLayoutEffect } from 'react';

export default function useContainerSize({ containerRef }) {
    const observer = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const handleResize = useCallback(() => {
        if (containerRef.current) {
            setContainerSize({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight,
            });
        }
    }, [containerRef]);

    const observe = useCallback(() => {
        if (containerRef.current) {
            handleResize();
            if (typeof ResizeObserver === 'function') {
                observer.current = new ResizeObserver(() => {
                    handleResize();
                });
                observer.current.observe(containerRef.current);
            } else {
                window.addEventListener('resize', handleResize);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef]);

    const disconnect = useCallback(() => {
        if (observer.current) {
            observer.current.disconnect(containerRef.current);
            observer.current = null;
        } else {
            window.removeEventListener('resize', handleResize);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef]);

    useLayoutEffect(() => {
        observe();
        return () => disconnect();
    }, [disconnect, observe]);

    return containerSize;
}
