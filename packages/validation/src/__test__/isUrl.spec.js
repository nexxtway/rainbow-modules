import isUrl from '../isUrl';

describe('isUrl', () => {
    it('should return true', () => {
        const urlTrueArray = [
            'http://www.google-com.123.com',
            'https://www.google-com.com',
            'http://google-com.com',
            'http://google.com',
            '//cdnblabla.cloudfront.net/css/app.css',
        ];
        urlTrueArray.forEach((item) => {
            expect(isUrl(item)).toBe(true);
        });
    });
    it('should return false', () => {
        const urlFalseArray = [
            'http://www.google-com.123',
            'google.com',
            'http://www.gfh.',
            'http://www.gfh.c',
            'http://www.gfh:800000',
            'www.google.com ',
            'http://google',
        ];
        urlFalseArray.forEach((item) => {
            expect(isUrl(item)).toBe(false);
        });
    });
});
