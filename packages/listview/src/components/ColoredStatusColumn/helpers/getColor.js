import getContrastText from 'react-rainbow-components/styles/helpers/color/getContrastText.js';
import isValidColor from 'react-rainbow-components/styles/helpers/color/isValidColor.js';
import getBackgroundColor from './getBackgroundColor';

const getColor = (map, value) => {
    if (map[value] && typeof map[value].color === 'string' && isValidColor(map[value].color)) {
        return map[value].color;
    }
    const backgroundColor = getBackgroundColor(map, value);
    return getContrastText(backgroundColor);
};

export default getColor;
