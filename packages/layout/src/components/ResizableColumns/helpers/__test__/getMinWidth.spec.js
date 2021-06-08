import getMinWidth from '../getMinWidth';

describe('getMinWidth', () => {
    it('should return the width in pixels', () => {
        expect(getMinWidth({ px: 10 })).toBe('10px');
    });

    it('should return the width in percent', () => {
        expect(getMinWidth({ percent: 10 })).toBe('10%');
    });

    it('should prefer pixels over percent', () => {
        expect(getMinWidth({ px: 10, percent: 10 })).toBe('10px');
    });

    it('should return 0px if param is wrong', () => {
        const values = [{}, false, undefined];
        values.forEach((value) => {
            expect(getMinWidth(value)).toBe('0px');
        });
    });
});
