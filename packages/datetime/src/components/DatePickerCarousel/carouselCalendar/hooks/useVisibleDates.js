import { useMemo, useState, useCallback, useEffect } from 'react';
import { addDays, isSameDay, isDateBelowLimit, isDateBeyondLimit } from '../../helpers';
import getScrollWindowPivot from '../helpers/getScrollWindowPivot';
import useCalendarBounds from './useCalendarBounds';

export default function useVisibleDates({ minDate, maxDate, currentDate, size }) {
    const bounds = useCalendarBounds({ minDate, maxDate });
    const [pivot, setPivot] = useState(getScrollWindowPivot(size));
    const [fromDate, setFromDate] = useState(null);

    const visibleDates = useMemo(() => {
        return Array.from(Array(size), (_, index) => addDays(fromDate, index));
    }, [size, fromDate]);

    const moveLeft = useCallback(
        (amount) => {
            const { minCalendarDate } = bounds;
            const date = addDays(fromDate, -amount);

            if (isDateBelowLimit(date, minCalendarDate)) {
                setFromDate(minCalendarDate);
                return minCalendarDate;
            }

            setFromDate(date);
            return date;
        },
        [bounds, fromDate],
    );

    const moveRight = useCallback(
        (amount) => {
            const { maxCalendarDate } = bounds;
            const date = addDays(fromDate, amount);

            if (isDateBeyondLimit(date, maxCalendarDate)) {
                setFromDate(maxCalendarDate);
                return maxCalendarDate;
            }

            setFromDate(date);
            return date;
        },
        [bounds, fromDate],
    );

    useEffect(() => {
        if (size > 0) {
            const newPivot = getScrollWindowPivot(size);
            setPivot(newPivot);
            setFromDate(addDays(currentDate, -newPivot.atIndex));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    useEffect(() => {
        const currentDateIndx = visibleDates.findIndex((date) => isSameDay(date, currentDate));
        if (currentDateIndx === -1) {
            setFromDate(addDays(currentDate, -pivot.atIndex));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate]);

    return {
        visibleDates,
        moveLeft,
        moveRight,
    };
}
