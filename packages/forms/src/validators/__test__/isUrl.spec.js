import isUrl from '../isUrl';

describe('isUrl', () => {
    it('should return undefined', () => {
        const validator = isUrl();
        expect(validator('https://www.google.com')).toBe(undefined);
    });
    it('should return the url is invalid.', () => {
        const validator = isUrl();
        expect(validator('google.com')).toBe('The url is invalid.');
    });
    it('should return the custom message.', () => {
        const validator = isUrl('my url is invalid');
        expect(validator('google.com')).toBe('my url is invalid');
    });
});
