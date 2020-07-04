import isPromise from '../isPromise';

describe('isPromise', () => {
    it('should return true', () => {
        const values = [new Promise(() => {})];
        values.forEach((value) => {
            expect(isPromise(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, {}, { then: () => {} }];
        values.forEach((value) => {
            expect(isPromise(value)).toBe(false);
        });
    });
});
