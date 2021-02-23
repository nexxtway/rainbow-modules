import isInteger from '../isInteger';

describe('isInteger', () => {
    it('should return an error when pass a no valid integer', () => {
        const values = ['test', '1.2', 1.3];
        values.forEach((value) => {
            const validator = isInteger();
            expect(validator(value)).toBe('The value must be an integer.');
        });
    });
    it('should return undefined when pass a valid integer', () => {
        const validator = isInteger();
        expect(validator(12)).toBe(undefined);
    });
    it('should return undefined when pass a valid integer with .0', () => {
        const validator = isInteger();
        expect(validator(1.0)).toBe(undefined);
    });
    it('should return undefined when pass a valid integer as string', () => {
        const validator = isInteger();
        expect(validator('3')).toBe(undefined);
    });
    it('should return undefined when pass empty values', () => {
        const values = ['', null, undefined];
        values.forEach((value) => {
            const validator = isInteger();
            expect(validator(value)).toBe(undefined);
        });
    });
});
