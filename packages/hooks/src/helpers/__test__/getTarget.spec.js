import getTarget from '../getTarget';

describe('getTarget', () => {
    it('should run the function and return its value when a function is passed', () => {
        const targetFn = jest.fn().mockReturnValue(true);
        expect(getTarget(targetFn)).toBe(true);
    });
    it('should return current when target has current', () => {
        const target = { current: true };
        expect(getTarget(target)).toBe(true);
    });
    it('should return target', () => {
        const target = true;
        expect(getTarget(target)).toBe(true);
    });
});
