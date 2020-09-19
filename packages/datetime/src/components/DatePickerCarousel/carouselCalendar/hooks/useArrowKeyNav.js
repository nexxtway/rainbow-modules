import { useState, useMemo, useCallback, useEffect } from 'react';
import { LEFT_KEY, RIGHT_KEY } from '../../constants';
import { isSameDay } from '../../helpers';

export default function useArrowKeyNav({ currentValue, visibleDates, scrollLeft, scrollRight }) {
    const [enableNavKeys, setEnableNavKeys] = useState(false);
    const [focusedDateIndex, setFocusedDateIndex] = useState(-1);

    const enableKeyboardNav = useCallback(() => setEnableNavKeys(true), []);
    const disableKeyboardNav = useCallback(() => setEnableNavKeys(false), []);

    const moveFocusedDate = useCallback(
        (delta) => {
            if (visibleDates.length > 0) {
                const currFocusedDateIndex =
                    focusedDateIndex >= 0
                        ? focusedDateIndex
                        : visibleDates.findIndex((date) => isSameDay(date, currentValue));
                const nextFocusedDateIndex = currFocusedDateIndex + delta;

                if (nextFocusedDateIndex < 0) {
                    scrollLeft();
                    setFocusedDateIndex(0);
                } else if (nextFocusedDateIndex === visibleDates.length) {
                    scrollRight();
                    setFocusedDateIndex(visibleDates.length - 1);
                } else {
                    setFocusedDateIndex(nextFocusedDateIndex);
                }
            }
        },
        [visibleDates, scrollLeft, scrollRight, focusedDateIndex, currentValue],
    );

    const keyHandlerMap = useMemo(
        () => ({
            [LEFT_KEY]: () => {
                moveFocusedDate(-1);
            },
            [RIGHT_KEY]: () => {
                moveFocusedDate(1);
            },
        }),
        [moveFocusedDate],
    );

    const handleKeyDown = useCallback(
        (event) => {
            if (enableNavKeys) {
                const { keyCode } = event;
                if (keyHandlerMap[keyCode]) {
                    event.preventDefault();
                    keyHandlerMap[keyCode]();
                }
            }
        },
        [enableNavKeys, keyHandlerMap],
    );

    useEffect(() => {
        const currentValueIndex = visibleDates.findIndex((date) => isSameDay(date, currentValue));
        if (currentValueIndex !== focusedDateIndex) {
            setFocusedDateIndex(currentValueIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue]);

    const focusedDate = useMemo(() => {
        const index =
            focusedDateIndex !== -1
                ? focusedDateIndex
                : visibleDates.findIndex((date) => isSameDay(date, currentValue));

        return visibleDates[index];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusedDateIndex, visibleDates]);

    return {
        useAutoFocus: enableNavKeys,
        focusedDate,
        focusedDateIndex,
        enableKeyboardNav,
        disableKeyboardNav,
        handleKeyDown,
    };
}
