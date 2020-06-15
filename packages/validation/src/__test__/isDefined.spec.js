import isDefined from '../isDefined';

describe('isDefined', () => {
    it('should return true', () => {
        const values = ['', [10.6], new Date(), '0', 0, { foo: 'bar' }];
        values.forEach((value) => {
            expect(isDefined(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined];
        values.forEach((value) => {
            expect(isDefined(value)).toBe(false);
        });
    });
});
