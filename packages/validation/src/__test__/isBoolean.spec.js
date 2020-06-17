import isBoolean from '../isBoolean';

describe('isBoolean', () => {
    it('should return true', () => {
        const values = [true, false];
        values.forEach((value) => {
            expect(isBoolean(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = ['true', 'false', null, undefined, 0, 1, {}];
        values.forEach((value) => {
            expect(isBoolean(value)).toBe(false);
        });
    });
});
