import { useState, useCallback, useEffect } from 'react';
import { compareDates, isSameDay } from '../../helpers';
import useCalendarBounds from './useCalendarBounds';

export default function useScrollArrows({ minDate, maxDate, visibleDates, moveLeft, moveRight }) {
    const { minCalendarDate, maxCalendarDate } = useCalendarBounds({ minDate, maxDate });
    const [disableScrollLeft, setDisableScrollLeft] = useState(false);
    const [disableScrollRight, setDisableScrollRight] = useState(false);

    const scrollLeftClick = useCallback(() => {
        if (disableScrollLeft) return;
        const nextStartDate = moveLeft(1);
        setDisableScrollLeft(isSameDay(nextStartDate, minCalendarDate));
    }, [disableScrollLeft, moveLeft, minCalendarDate]);

    const scrollRightClick = useCallback(() => {
        if (disableScrollRight) return;
        const nextStartDate = moveRight(1);
        setDisableScrollRight(isSameDay(nextStartDate, maxCalendarDate));
    }, [disableScrollRight, moveRight, maxCalendarDate]);

    useEffect(() => {
        if (visibleDates.length > 0) {
            setDisableScrollLeft(compareDates(visibleDates[0], minCalendarDate) <= 0);
            setDisableScrollRight(
                compareDates(visibleDates[visibleDates.length - 1], maxCalendarDate) >= 0,
            );
        }
    }, [minCalendarDate, maxCalendarDate, visibleDates]);

    return {
        disableScrollLeft,
        disableScrollRight,
        scrollLeftClick,
        scrollRightClick,
    };
}
