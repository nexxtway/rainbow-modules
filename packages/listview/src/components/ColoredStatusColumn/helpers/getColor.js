import getContrastText from 'react-rainbow-components/styles/helpers/color/getContrastText.js';
import isValidColor from 'react-rainbow-components/styles/helpers/color/isValidColor.js';
import getBackgroundColor from './getBackgroundColor';

const getColor = (value) => {
    if (value && typeof value.color === 'string' && isValidColor(value.color)) {
        return value.color;
    }
    const backgroundColor = getBackgroundColor(value);
    return getContrastText(backgroundColor);
};

export default getColor;
