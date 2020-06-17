import isArray from '../isArray';

describe('isArray', () => {
    it('should return true', () => {
        const values = [[], [1, 2, '4'], new Array(10)];
        values.forEach((value) => {
            expect(isArray(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, '', 0, {}];
        values.forEach((value) => {
            expect(isArray(value)).toBe(false);
        });
    });
});
