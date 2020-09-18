import getNormalizedColors from '../getNormalizedColors';

describe('helper getNormalizedColors', () => {
    const theme = {
        rainbow: {
            palette: {
                success: { main: 'rgba(0,255,0,1)' },
                warning: { main: 'rgba(255,255,0,1)' },
                error: { main: 'rgba(255,0,0,1)' },
            },
        },
    };
    it('should return object colors with keys in lowerCase ', () => {
        const colors = {
            Delivered: '#009900',
            pendIng: { backgroundColor: '#EBC665' },
        };
        const mapLowerCased = getNormalizedColors(colors, theme);
        expect(mapLowerCased).toEqual({
            delivered: '#009900',
            pending: { backgroundColor: '#EBC665' },
        });
    });

    it('should return object default colors', () => {
        const colors = undefined;
        const mapLowerCased = getNormalizedColors(colors, theme);
        expect(mapLowerCased).toEqual({
            success: 'rgba(0,255,0,1)',
            warning: 'rgba(255,255,0,1)',
            error: 'rgba(255,0,0,1)',
        });
    });
});
