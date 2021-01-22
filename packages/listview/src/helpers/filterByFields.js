function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getWords(query) {
    return query
        .split(/\s+/g)
        .map((word) => word.trim())
        .filter((word) => !!word);
}

const filterByFields = (params) => {
    const { query, data, mapValuesToStringFn = (item) => item.label } = params;
    if (query) {
        return data.filter((item) => {
            const stringToMatch = mapValuesToStringFn(item);
            const words = getWords(query);
            return words.every((word) => {
                const regex = new RegExp(escapeRegExp(word), 'i');
                return regex.test(stringToMatch);
            });
        });
    }
    return data;
};

const getFieldValue = (obj, field) => {
    if (typeof field === 'string') {
        return field.split('.').reduce((acc, item) => {
            const value = acc[item];
            if (value !== undefined) {
                return value;
            }
            return '';
        }, obj);
    }
    return '';
};

export default filterByFields;
