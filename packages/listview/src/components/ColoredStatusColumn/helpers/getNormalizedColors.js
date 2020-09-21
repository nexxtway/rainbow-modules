const getNormalizedColors = (colors) => {
    return Object.keys(colors).reduce((acc, key) => {
        return {
            ...acc,
            [key.toLowerCase()]: colors[key],
        };
    }, {});
};

export default getNormalizedColors;
