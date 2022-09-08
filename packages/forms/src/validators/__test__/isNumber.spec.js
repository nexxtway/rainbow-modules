import isNumber from '../isNumber';

describe('isNumber', () => {
    it('should return an error when pass a no valid number', () => {
        const values = ['test', {}];
        values.forEach((value) => {
            const validator = isNumber();
            expect(validator(value)).toBe('The value must be a number.');
        });
    });
    it('should return undefined when pass a valid number', () => {
        const validator = isNumber();
        const values = [12, 1.2];
        values.forEach((value) => {
            expect(validator(value)).toBe(undefined);
        });
    });
    it('should return undefined when pass a valid number as string', () => {
        const validator = isNumber();
        expect(validator('3')).toBe(undefined);
    });
    it('should return undefined when pass empty values', () => {
        const values = ['', null, undefined];
        values.forEach((value) => {
            const validator = isNumber();
            expect(validator(value)).toBe(undefined);
        });
    });
});
