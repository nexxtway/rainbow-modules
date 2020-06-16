import isEmpty from '../isEmpty';

describe('isEmpty', () => {
    it('should return true', () => {
        const values = [null, undefined, '', [], {}, '   '];
        values.forEach((value) => {
            expect(isEmpty(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [[10.6], new Date(), '0', 0, { foo: 'bar' }];
        values.forEach((value) => {
            expect(isEmpty(value)).toBe(false);
        });
    });
});
