import getScrollWindowPivot from '../getScrollWindowPivot';

describe('getScrollWindowPivot', () => {
    it('should return pivot with `atIndex = -1` when invalid size is passed', () => {
        const sizes = [null, undefined, Number.NaN, '', 0, -1];
        const privot = { atIndex: -1, before: 0, after: 0 };
        sizes.forEach((size) => {
            expect(getScrollWindowPivot(size)).toEqual(privot);
        });
    });
    it('should return right pivot when a valid size is passed', () => {
        const sizes = [1, 3, 5, 7, 15];
        const privots = [
            { atIndex: 0, before: 0, after: 0 },
            { atIndex: 0, before: 0, after: 2 },
            { atIndex: 1, before: 1, after: 3 },
            { atIndex: 1, before: 1, after: 5 },
            { atIndex: 4, before: 4, after: 10 },
        ];
        sizes.forEach((size, index) => {
            expect(getScrollWindowPivot(size)).toEqual(privots[index]);
        });
    });
});
