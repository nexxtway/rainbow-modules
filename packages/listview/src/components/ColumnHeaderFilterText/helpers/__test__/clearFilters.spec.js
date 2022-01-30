import clearFilters from '../clearFilters';

describe('helper clearFilters', () => {
    it('should return empty array when filter is not an array', () => {
        const data = [undefined, null, {}, new Date(), 1, 'test'];
        data.forEach((value) => {
            expect(clearFilters(value).length).toBe(0);
        });
    });
    it('should return an array with only one element', () => {
        const filters = ['test', null, undefined, ''];
        expect(clearFilters(filters).length).toBe(1);
    });
});
