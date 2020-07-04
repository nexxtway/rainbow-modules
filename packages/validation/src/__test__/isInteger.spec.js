import isInteger from '../isInteger';

describe('isInteger', () => {
    it('should return true', () => {
        const values = [0, 10, 0x233556];
        values.forEach((value) => {
            expect(isInteger(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [10.6];
        values.forEach((value) => {
            expect(isInteger(value)).toBe(false);
        });
    });
});
