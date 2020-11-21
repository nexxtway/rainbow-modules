import getVisibleCards from '../getVisibleCards';

describe('getVisibleCards', () => {
    it('should return right value when cardWidth is not valid', () => {
        const cardWidths = [null, undefined, 0, '', -1];
        cardWidths.forEach((cardWidth) => {
            expect(getVisibleCards(cardWidth, 100)).toBe(0);
        });
    });
    it('should return right value when containerWidth is not valid', () => {
        const containerWidths = [null, undefined, 0, '', -1];
        containerWidths.forEach((containerWidth) => {
            expect(getVisibleCards(10, containerWidth)).toBe(0);
        });
    });
    it('should return right value when containerWidth and cardWidth are valid', () => {
        expect(getVisibleCards(5, 28)).toBe(5);
        expect(getVisibleCards(10, 26)).toBe(2);
    });
});
