import { getContrastText } from '@rainbow-modules/colors';
import getColor from '../getColor';

describe('helper getColor', () => {
    const map = {
        delivered: '#0f0',
        pending: { backgroundColor: '#EBC665', color: '#fff' },
    };

    it('should return map[value].color if typeof map[value].color === string && isValidColor(map[value].color)', () => {
        const value = 'pending';
        const color = getColor(map[value]);
        expect(color).toBe('#fff');
    });

    it('should return getContrastText if map[value].color does not exist', () => {
        const value = 'delivered';
        const color = getColor(map[value]);
        const getConstrastText = getContrastText('#0f0');
        expect(color).toBe(getConstrastText);
    });

    it('should return getContrastText if map[value].color has a typeof !== string', () => {
        const map = {
            delivered: '#0f0',
            pending: { backgroundColor: '#EBC665', color: ['#fff'] },
        };
        const value = 'delivered';
        const color = getColor(map[value]);
        const getConstrastText = getContrastText('#EBC665');
        expect(color).toBe(getConstrastText);
    });
});
