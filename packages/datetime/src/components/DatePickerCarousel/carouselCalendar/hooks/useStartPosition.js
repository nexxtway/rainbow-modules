import { useState, useCallback, useEffect } from 'react';
import { addDays, isDateBelowLimit, isDateBeyondLimit } from '../../helpers';
import getScrollWindowPivot from '../helpers/getScrollWindowPivot';

export default function useStartPosition({ bounds, currentDate, size }) {
    const [, setPivot] = useState(getScrollWindowPivot(size));
    const [fromDate, setFromDate] = useState(null);

    useEffect(() => {
        if (size > 0) {
            const newPivot = getScrollWindowPivot(size);
            setPivot(newPivot);
            setFromDate(addDays(currentDate, -newPivot.atIndex));
        }
    }, [size, currentDate]);

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

    return {
        fromDate,
        moveLeft,
        moveRight,
    };
}
