import isDateInFuture from '../isDateInFuture';

describe('isDateInFuture', () => {
    it('should return true', () => {
        const values = [new Date(2021, 11, 23), '2020-12-19'];
        values.forEach((value) => {
            expect(isDateInFuture(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = ['2018-12-19', '2018/04/04', new Date(2019, 0, 1), new Date()];
        values.forEach((value) => {
            expect(isDateInFuture(value)).toBe(false);
        });
    });
});
