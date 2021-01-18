import isRequired from '../isRequired';

describe('isRequired', () => {
    it('should return undefined', () => {
        const validator = isRequired();
        expect(validator('test')).toBe(undefined);
    });
    it('should return required.', () => {
        const validator = isRequired();
        expect(validator()).toBe('Required.');
    });
});
