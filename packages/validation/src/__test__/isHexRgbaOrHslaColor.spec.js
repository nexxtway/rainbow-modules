import isHexRgbaOrHslaColor from '../isHexRgbaOrHslaColor';

describe('isHexRgbaOrHslaColor()', () => {
    it('should return false', () => {
        [
            null,
            [],
            {},
            34,
            '',
            'abc',
            '#abcde',
            0x2342342,
            'rgb 255 255',
            'hsl 255 255',
            'rg(255 255)',
            'rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)',
        ].forEach((color) => expect(isHexRgbaOrHslaColor(color)).toBe(false));
    });
    it('should return true', () => {
        [
            '#F09',
            '#80deea',
            '#FF0099',
            'rgb(255,0,153)',
            'rgb(255, 0, 153)',
            'rgb(100%,0%,60%)',
            'rgb(100%, 0%, 60%)',
            'rgb(100%, 0, 60%)',
            'rgb(255 0 153)',
            '#F09f',
            '#FF0099ff',
            'rgba(51, 170, 51, .1)',
            'rgba(51, 170, 51,  1)',
            'rgba(51 170 51 / 0.4)',
            'rgba(51 170 51 / 40%)',
            'hsl(270,60%,70%)',
            'hsl(270, 60%, 70%)',
            'hsl(270 60% 70%)',
            'hsla(270   60%   50% / 15%)',
            'hsla(270, 60%, 50%, .15)',
            'hsla(270, 60%, 50%, 15%)',
            'hsla(270 60% 50% / .15)',
        ].forEach((color) => expect(isHexRgbaOrHslaColor(color)).toBe(true));
    });
});
