import isNumber from '../isNumber';

describe('isNumber', () => {
    it('should return true', () => {
        const values = [0, 10, 10.6, 0.5, 0x233556];
        values.forEach((value) => {
            expect(isNumber(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, [10.6], [], new Date(), {}, '0'];
        values.forEach((value) => {
            expect(isNumber(value)).toBe(false);
        });
    });
});
