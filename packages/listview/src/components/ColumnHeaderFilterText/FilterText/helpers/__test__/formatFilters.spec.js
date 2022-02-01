import formatFilters from '../formatFilters';

describe('helper formatFilters', () => {
    it('should return an array with empty text when filters is not right value', () => {
        const nodes = [undefined, null, {}, [], new Date()];
        nodes.forEach((value) => {
            expect(formatFilters(value)).toStrictEqual(['']);
        });
    });
    it('should return the same filters', () => {
        const filters = ['test'];
        expect(formatFilters(filters)).toStrictEqual(filters);
    });
});
