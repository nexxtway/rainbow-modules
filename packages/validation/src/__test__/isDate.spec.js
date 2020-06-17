import isDate from '../isDate';

describe('isDate', () => {
    it('should return true', () => {
        const values = [new Date(), new Date('2018-12-19')];
        values.forEach((value) => {
            expect(isDate(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, [], {}, '', 'sfdsf', 0, 8888];
        values.forEach((value) => {
            expect(isDate(value)).toBe(false);
        });
    });
});
