import getNormalizedColors from '../getNormalizedColors';

describe('helper getNormalizedColors', () => {
    it('should return object colors with keys in lowerCase ', () => {
        const colors = {
            Delivered: '#009900',
            pendIng: { backgroundColor: '#EBC665' },
        };
        const mapLowerCased = getNormalizedColors(colors);
        expect(mapLowerCased).toEqual({
            delivered: '#009900',
            pending: { backgroundColor: '#EBC665' },
        });
    });
});
