import { useState, useCallback, useEffect } from 'react';
import { compareDates, isSameDay } from '../../helpers';
import useCalendarBounds from './useCalendarBounds';

export default function useScrollArrows({ minDate, maxDate, visibleDates, moveLeft, moveRight }) {
    const { minCalendarDate, maxCalendarDate } = useCalendarBounds({ minDate, maxDate });
    const [disableScrollLeft, setDisableScrollLeft] = useState(false);
    const [disableScrollRight, setDisableScrollRight] = useState(false);

    const scrollLeftClick = useCallback(() => {
        const nextStartDate = moveLeft(1);
        setDisableScrollLeft(isSameDay(nextStartDate, minCalendarDate));
    }, [moveLeft, minCalendarDate]);

    const scrollRightClick = useCallback(() => {
        const nextStartDate = moveRight(1);
        setDisableScrollRight(isSameDay(nextStartDate, maxCalendarDate));
    }, [moveRight, maxCalendarDate]);

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
