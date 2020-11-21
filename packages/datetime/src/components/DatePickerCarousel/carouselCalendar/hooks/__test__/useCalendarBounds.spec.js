import { renderHook } from '@testing-library/react-hooks';
import useCalendarBounds from '../useCalendarBounds';

describe('useCalendarBounds', () => {
    it('should return minDate and maxDate as bounds when date is between them', () => {
        const date = new Date(2019, 0, 1);
        const minDate = new Date(2018, 0, 1);
        const maxDate = new Date(2020, 0, 1);
        const bounds = {
            minCalendarDate: minDate,
            maxCalendarDate: maxDate,
        };
        const { result } = renderHook(() =>
            useCalendarBounds({ minDate, maxDate, currentValue: date }),
        );
        expect(result.current).toEqual(bounds);
    });
    it('should return date and maxDate as bounds when date is below minDate', () => {
        const date = new Date(2018, 0, 1);
        const minDate = new Date(2019, 0, 1);
        const maxDate = new Date(2020, 0, 1);
        const bounds = {
            minCalendarDate: date,
            maxCalendarDate: maxDate,
        };
        const { result } = renderHook(() =>
            useCalendarBounds({ minDate, maxDate, currentValue: date }),
        );
        expect(result.current).toEqual(bounds);
    });
    it('should return minDate and date as bounds when date is beyond maxDate', () => {
        const date = new Date(2021, 0, 1);
        const minDate = new Date(2019, 0, 1);
        const maxDate = new Date(2020, 0, 1);
        const bounds = {
            minCalendarDate: minDate,
            maxCalendarDate: date,
        };
        const { result } = renderHook(() =>
            useCalendarBounds({ minDate, maxDate, currentValue: date }),
        );
        expect(result.current).toEqual(bounds);
    });
});
