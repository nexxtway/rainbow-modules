import { useMemo } from 'react';
import { getCalendarBounds, isDateBelowLimit, isDateBeyondLimit } from '../../helpers';

export default function useCalendarBounds({ minDate, maxDate, currentValue }) {
    return useMemo(() => {
        const lowerBound = isDateBelowLimit(currentValue, minDate) ? currentValue : minDate;
        const upperBound = isDateBeyondLimit(currentValue, maxDate) ? currentValue : maxDate;
        return getCalendarBounds(lowerBound, upperBound);
    }, [minDate, maxDate, currentValue]);
}
