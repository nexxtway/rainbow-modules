import getFormattedDayName from '../getFormattedDayName';

describe('getFormattedDayName', () => {
    it('should return an empty string when pass falsy values', () => {
        const values = [undefined, null, '', 0];
        values.forEach((value) => {
            expect(getFormattedDayName(value)).toBe('');
        });
    });
    it('should return an empty string when pass an invalid date', () => {
        const values = ['29-08-2003', 'wrong date'];
        values.forEach((value) => {
            expect(getFormattedDayName(value)).toBe('');
        });
    });
    it('should return the right formatted date', () => {
        const values = [new Date(2019, 3, 24), new Date('04/24/2019'), '04/24/2019'];
        values.forEach((value) => {
            expect(getFormattedDayName(value)).toBe('Wed');
        });
    });
    it('should return the right formatted date when formatStyle large', () => {
        const values = [new Date(2019, 3, 24), new Date('04/24/2019'), '04/24/2019'];
        values.forEach((value) => {
            expect(getFormattedDayName(value, 'large')).toBe('Wednesday');
        });
    });
    it('should return the right formatted date when formatStyle small', () => {
        const values = [new Date(2019, 3, 24), new Date('04/24/2019'), '04/24/2019'];
        values.forEach((value) => {
            expect(getFormattedDayName(value, 'small')).toBe('W');
        });
    });
    it('should return the right formatted date when formatStyle is wrong', () => {
        expect(getFormattedDayName(new Date(2019, 3, 24), 'normal')).toBe('Wed');
        expect(getFormattedDayName(new Date('04/24/2019'), 'big')).toBe('Wed');
        expect(getFormattedDayName('04/24/2019', 'short')).toBe('Wed');
    });
});
