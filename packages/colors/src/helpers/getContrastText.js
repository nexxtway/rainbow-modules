import darken from './darken';
import getContrastRatio from './getContrastRatio';
import colorToRgba from './colorToRgba';

const COLOR_BRAND = '#01b6f5';
const COLOR_SUCCESS = '#1de9b6';

const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
    },
};

const dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
    },
};

const contrastThreshold = 3;

export default function getContrastText(background) {
    if (!background) {
        throw new TypeError(`Missing background argument in getContrastText(${background}).`);
    }
    const isDefaultBackground =
        background === colorToRgba(COLOR_BRAND) ||
        background === colorToRgba(darken(COLOR_BRAND)) ||
        background === colorToRgba(COLOR_SUCCESS) ||
        background === colorToRgba(darken(COLOR_SUCCESS));

    const contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground
            ? dark.text.primary
            : light.text.primary;

    return contrastText;
}
