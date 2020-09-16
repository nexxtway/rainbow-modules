import { useMemo } from 'react';
import { addDays } from '../../helpers';
import useCalendarBounds from './useCalendarBounds';
import useStartPosition from './useStartPosition';

export default function useVisibleDates({ minDate, maxDate, currentDate, size }) {
    const bounds = useCalendarBounds({ minDate, maxDate });
    const { fromDate, moveLeft, moveRight } = useStartPosition({ bounds, size, currentDate });

    const visibleDates = useMemo(() => {
        return Array.from(Array(size), (_, index) => addDays(fromDate, index));
    }, [size, fromDate]);

    return {
        visibleDates,
        moveLeft,
        moveRight,
    };
}
