import serializeFilters from '../serializeFilters';

describe('helper serializeFilters', () => {
    it('should return empty array when filter is not an array', () => {
        const data = [undefined, null, {}, new Date(), 1, 'test'];
        data.forEach((value) => {
            expect(serializeFilters(value).length).toBe(0);
        });
    });
    it('should return an array with only one element', () => {
        const filters = [
            {
                value: 'test',
            },
            {},
            null,
            undefined,
            '',
        ];
        expect(serializeFilters(filters).length).toBe(1);
    });
});
