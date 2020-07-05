import getTarget from '../getTarget';

describe('getTarget', () => {
    it('should return current when target has current', () => {
        const target = { current: true };
        expect(getTarget(target)).toBe(true);
    });
    it('should return target', () => {
        const target = true;
        expect(getTarget(target)).toBe(true);
    });
});
