import { useMemo, useCallback } from 'react';
import { LEFT_KEY, RIGHT_KEY } from '../constants';

export default function useKeyNav({ isCarousel }) {
    const keyHandlerMap = useMemo(
        () => ({
            [LEFT_KEY]: () => {
                console.log('preview');
            },
            [RIGHT_KEY]: () => {
                console.log('next');
            },
        }),
        [],
    );

    const handleKeyDown = useCallback(
        (event) => {
            if (isCarousel) {
                const { keyCode } = event;
                if (keyHandlerMap[keyCode]) {
                    keyHandlerMap[keyCode]();
                }
            }
        },
        [isCarousel, keyHandlerMap],
    );
    return { handleKeyDown };
}
