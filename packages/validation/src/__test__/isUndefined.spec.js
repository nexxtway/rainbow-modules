import isUndefined from '../isUndefined';

describe('isUndefined', () => {
    it('should return true', () => {
        const values = [undefined];
        values.forEach((value) => {
            expect(isUndefined(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, '', [10.6], new Date(), '0', 0, { foo: 'bar' }];
        values.forEach((value) => {
            expect(isUndefined(value)).toBe(false);
        });
    });
});
