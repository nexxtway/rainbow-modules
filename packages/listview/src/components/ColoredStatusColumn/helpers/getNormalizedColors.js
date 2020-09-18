const getNormalizedColors = (colors, theme) => {
    const { success, warning, error } = theme.rainbow.palette;
    const defaultColors = {
        success: success.main,
        warning: warning.main,
        error: error.main,
    };
    const map = colors || defaultColors;

    const mapLowerCased = Object.keys(map).reduce((acc, key) => {
        return {
            ...acc,
            [key.toLowerCase()]: map[key],
        };
    }, {});

    return mapLowerCased;
};

export default getNormalizedColors;
