import isValidColor from 'react-rainbow-components/styles/helpers/color/isValidColor.js';

const getBackgroundColor = (map, value) => {
    const defaultBackgroundColor = '#fff';

    if (typeof map[value] === 'string' && isValidColor(map[value])) {
        return map[value];
    }
    if (
        map[value] &&
        typeof map[value].backgroundColor === 'string' &&
        isValidColor(map[value].backgroundColor)
    ) {
        return map[value].backgroundColor;
    }
    return defaultBackgroundColor; // white
};

export default getBackgroundColor;
