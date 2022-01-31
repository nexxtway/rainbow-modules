import { getCurrentDay, getCurrentMonth, getCurrentWeek, getCustomDates } from '.';
import { DateRange } from '../types';

const getDatesFromFilter = (dateRange: DateRange): [Date, Date] | null => {
    if (dateRange.name === 'today') {
        return getCurrentDay();
    }
    if (dateRange.name === 'this-week') {
        return getCurrentWeek();
    }
    if (dateRange.name === 'this-month') {
        return getCurrentMonth();
    }
    if (dateRange.name === 'custom' && dateRange.label) {
        return getCustomDates(dateRange.label);
    }
    return null;
};

export default getDatesFromFilter;
