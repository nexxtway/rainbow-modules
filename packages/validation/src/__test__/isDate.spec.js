import isDate from '../isDate';

describe('isDate', () => {
    it('should return true', () => {
        const values = [new Date(), '2018-12-19', '2018/04/04', '2018/04/04 12:00:00 am'];
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
