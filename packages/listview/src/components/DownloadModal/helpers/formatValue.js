const formatValue = (value) => {
    if (typeof value === 'object' || typeof value === 'function') return typeof value;
    return value;
};

export default formatValue;
