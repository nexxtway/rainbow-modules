import { useState, useCallback, useEffect } from 'react';
import { compareDates, isSameDay } from '../../helpers';

export default function useScrollArrows({ minDate, maxDate, visibleDates, moveLeft, moveRight }) {
    const [disableScrollLeft, setDisableScrollLeft] = useState(false);
    const [disableScrollRight, setDisableScrollRight] = useState(false);

    const scrollLeftClick = useCallback(() => {
        const nextStartDate = moveLeft(1);
        setDisableScrollLeft(isSameDay(nextStartDate, minDate));
    }, [moveLeft, minDate]);

    const scrollRightClick = useCallback(() => {
        const nextStartDate = moveRight(1);
        setDisableScrollRight(isSameDay(nextStartDate, maxDate));
    }, [moveRight, maxDate]);

    useEffect(() => {
        if (visibleDates.length > 0) {
            setDisableScrollLeft(compareDates(visibleDates[0], minDate) <= 0);
            setDisableScrollRight(
                compareDates(visibleDates[visibleDates.length - 1], maxDate) >= 0,
            );
        }
    }, [maxDate, minDate, visibleDates]);

    return {
        disableScrollLeft,
        disableScrollRight,
        scrollLeftClick,
        scrollRightClick,
    };
}
