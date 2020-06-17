import isPromise from '../isPromise';

describe('isPromise', () => {
    it('should return true', () => {
        const values = [new Promise(() => {}), { then: () => {} }];
        values.forEach((value) => {
            expect(isPromise(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, {}];
        values.forEach((value) => {
            expect(isPromise(value)).toBe(false);
        });
    });
});
