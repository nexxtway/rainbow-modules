const resolveValueBetweenRange = (value, maxEntries) => {
    const newValue = value && Math.min(Number(value), maxEntries);
    return value && Math.max(newValue, 1);
};

export default resolveValueBetweenRange;
