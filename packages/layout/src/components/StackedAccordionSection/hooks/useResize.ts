import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseResizeProps {
    handlerElement?: HTMLElement;
    onMove: (dx: number, dy: number, clientX: number, clientY: number) => void;
    onResizeStart?: (event: MouseEvent) => void;
    onResizeEnd?: (event: MouseEvent) => void;
}

export const useResize = ({
    handlerElement,
    onMove,
    onResizeStart,
    onResizeEnd,
}: UseResizeProps): void => {
    const [isMoving, setIsMoving] = useState(false);
    const clientX = useRef<number>();
    const clientY = useRef<number>();

    const handleMouseDown = useCallback(
        (event: MouseEvent) => {
            if (onResizeStart) onResizeStart(event);
            if (handlerElement) {
                clientX.current = event.clientX;
                clientY.current = event.clientY;
                setIsMoving(true);
            }
        },
        [handlerElement, onResizeStart],
    );

    const handleMouseUp = useCallback(
        (event: MouseEvent) => {
            if (onResizeEnd) onResizeEnd(event);
            clientX.current = undefined;
            clientY.current = undefined;
            setIsMoving(false);
        },
        [onResizeEnd],
    );

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            const dx = clientX.current ? clientX.current - event.clientX : 0;
            const dy = clientY.current ? clientY.current - event.clientY : 0;
            clientX.current = event.clientX;
            clientY.current = event.clientY;

            if (onMove) onMove(dx, dy, event.clientX, event.clientY);
        },
        [onMove],
    );

    useEffect(() => {
        const element = handlerElement;
        if (element) {
            element.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            if (element) {
                element.removeEventListener('mousedown', handleMouseDown);
            }
        };
    }, [handleMouseDown, handlerElement]);

    useEffect(() => {
        if (isMoving) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, isMoving]);
};
export default useResize;
