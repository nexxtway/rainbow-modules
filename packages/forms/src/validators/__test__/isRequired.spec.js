import isRequired from '../isRequired';

describe('isRequired', () => {
    it('should return undefined', () => {
        const validator = isRequired();
        expect(validator('test')).toBe(undefined);
    });
    it('should return undefined when pass 0 as number', () => {
        const validator = isRequired();
        expect(validator(0)).toBe(undefined);
    });
    it('should return required.', () => {
        const validator = isRequired();
        expect(validator()).toBe('Required.');
    });
});
