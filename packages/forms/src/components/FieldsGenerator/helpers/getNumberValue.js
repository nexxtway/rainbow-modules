const getNumberValue = (data) => {
    if (typeof data === 'number') {
        return data;
    }
    if (data && typeof data.value === 'number') {
        return data.value;
    }
    return undefined;
};

export default getNumberValue;
