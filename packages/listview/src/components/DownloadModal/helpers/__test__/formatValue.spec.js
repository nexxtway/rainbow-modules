import formatValue from '../formatValue';

describe('formatValue', () => {
    it('should return object when value is object', () => {
        const value = {};
        const result = formatValue(value);
        expect(result).toBe('object');
    });
    it('should return object when value is array', () => {
        const value = [];
        const result = formatValue(value);
        expect(result).toBe('object');
    });
    it('should return function', () => {
        const value = () => {};
        const result = formatValue(value);
        expect(result).toBe('function');
    });
    it('should return value', () => {
        const value = 'value';
        const result = formatValue(value);
        expect(result).toBe('value');
    });
});
