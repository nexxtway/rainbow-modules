import isAsync from '../isAsync';

describe('isAsync', () => {
    it('should return true', () => {
        const values = [
            // eslint-disable-next-line func-names, no-empty-function
            async function () {},
            async () => {},
            new Promise(() => {}),
            async () => new Promise(() => {}),
        ];
        values.forEach((value) => {
            expect(isAsync(value)).toBe(true);
        });
    });
    it('should return false', () => {
        // eslint-disable-next-line func-names, no-empty-function
        const values = [null, undefined, '', 0, {}, () => {}, function () {}];
        values.forEach((value) => {
            expect(isAsync(value)).toBe(false);
        });
    });
});
