import isNull from '../isNull';

describe('isNull', () => {
    it('should return true', () => {
        const values = [null];
        values.forEach((value) => {
            expect(isNull(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [undefined, '', [10.6], new Date(), '0', 0, { foo: 'bar' }];
        values.forEach((value) => {
            expect(isNull(value)).toBe(false);
        });
    });
});
