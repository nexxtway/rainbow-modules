import { useState, useEffect } from 'react';

export default function useContainerSize({ containerRef }) {
    const [containerSize, setContainerSize] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerSize(containerRef.current.clientWidth);
        }
    }, [containerRef]);

    return containerSize;
}
