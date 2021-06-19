import shouldMove from '../shouldMove';

describe('shouldMove', () => {
    it('showld return true when mouse movement is in range', () => {
        const div = document.createElement('div');
        div.getBoundingClientRect = jest.fn(() => ({
            right: 100,
            left: 100,
        }));
        expect(shouldMove(2, 50, div)).toBe(true);
        expect(shouldMove(-2, 150, div)).toBe(true);
    });

    it('showld return false when mouse movement is out of range', () => {
        const div = document.createElement('div');
        div.getBoundingClientRect = jest.fn(() => ({
            right: 100,
            left: 100,
        }));
        expect(shouldMove(2, 150, div)).toBe(false);
        expect(shouldMove(-2, 50, div)).toBe(false);
    });

    it('should return false when separator is not an HTML element', () => {
        const values = [undefined, null, false, 'string', 1];
        values.forEach((value) => {
            expect(shouldMove(2, 150, value)).toBe(false);
        });
    });
});
