import isEmail from '../isEmail';

describe('isEmail', () => {
    it('should return undefined', () => {
        const validator = isEmail();
        expect(validator('test@test.com')).toBe(undefined);
    });
    it('should return the email is invalid.', () => {
        const validator = isEmail();
        expect(validator('test')).toBe('The email is invalid.');
    });
});
