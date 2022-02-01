import resolveValueBetweenRange from '../resolveValueBetweenRange';

describe('resolveValueBetweenRange', () => {
    it('should return 1 when value is a negative number', () => {
        const value = '-5';
        const maxEntries = 10;
        const result = resolveValueBetweenRange(value, maxEntries);
        expect(result).toBe(1);
    });
    it('should return 1 when value is 0', () => {
        const value = '0';
        const maxEntries = 10;
        const result = resolveValueBetweenRange(value, maxEntries);
        expect(result).toBe(1);
    });
    it('should return 10 when value is bigger than maxEntries', () => {
        const value = '99';
        const maxEntries = 10;
        const result = resolveValueBetweenRange(value, maxEntries);
        expect(result).toBe(10);
    });
    it('should return value', () => {
        const value = '7';
        const maxEntries = 10;
        const result = resolveValueBetweenRange(value, maxEntries);
        expect(result).toBe(7);
    });
});
