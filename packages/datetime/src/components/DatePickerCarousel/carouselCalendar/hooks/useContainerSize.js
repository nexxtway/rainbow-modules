import { useRef, useState, useEffect } from 'react';

export default function useContainerSize({ containerRef }) {
    const [containerSize, setContainerSize] = useState(0);

    const observer = useRef(
        new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            setContainerSize(width);
        }),
    );

    useEffect(() => {
        const currentObserver = observer.current;
        if (containerRef.current) {
            currentObserver.observe(containerRef.current);
        }

        return () => {
            currentObserver.unobserve();
        };
    }, [containerRef, observer]);

    return containerSize;
}
