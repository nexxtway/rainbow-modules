const getSelectOptions = (type, options) => {
    return type === 'select' && Array.isArray(options) ? options : undefined;
};

export default getSelectOptions;
