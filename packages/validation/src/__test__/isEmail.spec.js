import isEmail from '../isEmail';

describe('isEmail', () => {
    it('should return true', () => {
        const values = ['user@domain.com', 'user@domain.co.cu', 'name.lastname@the.domain.com'];
        values.forEach((value) => {
            expect(isEmail(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [
            'user',
            'user@',
            'user@domain',
            '@domain.com',
            '@domain',
            'user@@domain.com',
        ];
        values.forEach((value) => {
            expect(isEmail(value)).toBe(false);
        });
    });
});
