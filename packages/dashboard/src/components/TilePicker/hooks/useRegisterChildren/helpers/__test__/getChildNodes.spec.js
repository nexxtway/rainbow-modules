import getChildNodes from '../getChildNodes';

describe('getChildNodes', () => {
    const elements = [
        { element: 'div', innerText: 'Julio' },
        { element: 'div', innerText: 'Pepe' },
    ];
    const ref = {
        querySelectorAll: jest.fn(() => elements),
    };
    const selector = 'div[role="option"]';
    it('should call querySelectorAll with a[role="menuitem"]', () => {
        getChildNodes(ref, selector);
        expect(ref.querySelectorAll).toHaveBeenCalledWith(selector);
    });
    it('should return the elements resolved by querySelectorAll', () => {
        expect(getChildNodes(ref, selector)).toEqual(elements);
    });
    it('should return an empty array if anything is passed', () => {
        expect(getChildNodes()).toEqual([]);
    });
});
