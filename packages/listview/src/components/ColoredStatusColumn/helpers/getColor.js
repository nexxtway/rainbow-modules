import { getContrastText, isValidColor } from '@rainbow-modules/colors';
import getBackgroundColor from './getBackgroundColor';

const getColor = (value) => {
    if (value && typeof value.color === 'string' && isValidColor(value.color)) {
        return value.color;
    }
    const backgroundColor = getBackgroundColor(value);
    return getContrastText(backgroundColor);
};

export default getColor;
