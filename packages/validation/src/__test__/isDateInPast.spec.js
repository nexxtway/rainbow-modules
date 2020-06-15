import isDateInPast from '../isDateInPast';

describe('isDateInPast', () => {
    it('should return true', () => {
        const values = ['2018-12-19', '2018/04/04', new Date(2019, 0, 1)];
        values.forEach((value) => {
            expect(isDateInPast(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [new Date(2021, 11, 23), '2020-12-19'];
        values.forEach((value) => {
            expect(isDateInPast(value)).toBe(false);
        });
    });
});
