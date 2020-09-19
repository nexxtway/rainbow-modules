import getBackgroundColor from '../getBackgroundColor';

describe('helper getBackgroundColor', () => {
    const map = {
        delivered: '#009900',
        pending: { backgroundColor: '#EBC665' },
    };
    it('should return map[value] if typeof map[value] === string and isValidColor(map[value])', () => {
        const value = 'delivered';
        const backgroundColor = getBackgroundColor(map[value]);
        expect(backgroundColor).toBe('#009900');
    });

    it('should return map[value] if typeof map[value].backgroundColor === string && isValidColor(map[value].backgroundColor)', () => {
        const value = 'pending';
        const backgroundColor = getBackgroundColor(map[value]);
        expect(backgroundColor).toBe('#EBC665');
    });

    it('should return default BackgroundColor = #fff if map[value] does not exist', () => {
        const value = 'canceled';
        const backgroundColor = getBackgroundColor(map[value]);
        expect(backgroundColor).toBe('#fff');
    });

    it('should return default BackgroundColor = #fff if map[value] has a typeof !== string', () => {
        const value = 'delivered';
        const map = {
            delivered: 990000,
            pending: { backgroundColor: '#EBC665' },
        };
        const backgroundColor = getBackgroundColor(map[value]);
        expect(backgroundColor).toBe('#fff');
    });

    it('should return default BackgroundColor = #fff if map[value].backgroundColor has a typeof !== string', () => {
        const value = 'pending';
        const map = {
            delivered: '#009900',
            pending: { backgroundColor: ['#EBC665'] },
        };
        const backgroundColor = getBackgroundColor(map[value]);
        expect(backgroundColor).toBe('#fff');
    });
});
