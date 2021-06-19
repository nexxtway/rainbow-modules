import { useCallback, useEffect, useRef, useState } from 'react';
import { UseResizeProps } from '../types';

export const useResize = ({
    handlerElement,
    onMove,
    onResizeStart,
    onResizeEnd,
}: UseResizeProps): [boolean, (event: React.MouseEvent) => void] => {
    const [isResizing, setIsResizing] = useState(false);
    const clientX = useRef<number>();
    const clientY = useRef<number>();

    const handleMouseDown = useCallback(
        (event: React.MouseEvent) => {
            if (onResizeStart) onResizeStart(event);
            if (handlerElement) {
                clientX.current = event.clientX;
                clientY.current = event.clientY;
                setIsResizing(true);
            }
        },
        [handlerElement, onResizeStart],
    );

    const handleMouseUp = useCallback(
        (event: MouseEvent) => {
            if (onResizeEnd) onResizeEnd(event);
            clientX.current = undefined;
            clientY.current = undefined;
            setIsResizing(false);
        },
        [onResizeEnd],
    );

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            const dx = clientX.current ? clientX.current - event.clientX : 0;
            const dy = clientY.current ? clientY.current - event.clientY : 0;
            clientX.current = event.clientX;
            clientY.current = event.clientY;

            if (onMove) onMove({ dx, dy, clientX: event.clientX, clientY: event.clientY });
        },
        [onMove],
    );

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, isResizing]);

    return [isResizing, handleMouseDown];
};
export default useResize;
