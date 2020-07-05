import isDomElement from '../isDomElement';

describe('isDomElement', () => {
    it('should return true', () => {
        const div = document.createElement('div');
        const values = [div, document.body];
        values.forEach((value) => {
            expect(isDomElement(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [document, window, null, '', [10.6], new Date(), '0', 0, { foo: 'bar' }];
        values.forEach((value) => {
            expect(isDomElement(value)).toBe(false);
        });
    });
});
