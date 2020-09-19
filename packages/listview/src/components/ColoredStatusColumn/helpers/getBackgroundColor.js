import isValidColor from 'react-rainbow-components/styles/helpers/color/isValidColor.js';

const defaultBackgroundColor = '#fff';
const getBackgroundColor = (value) => {
    if (typeof value === 'string' && isValidColor(value)) {
        return value;
    }
    if (value && typeof value.backgroundColor === 'string' && isValidColor(value.backgroundColor)) {
        return value.backgroundColor;
    }
    return defaultBackgroundColor;
};

export default getBackgroundColor;
