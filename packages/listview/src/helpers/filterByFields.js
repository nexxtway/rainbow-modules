function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getWords(query) {
    return query
        .split(/\s+/g)
        .map((word) => word.trim())
        .filter((word) => !!word);
}

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

const mapValuesToString = (obj, fields) => {
    return fields
        .map((field) => {
            return getFieldValue(obj, field);
        })
        .join(',');
};

const filterByFields = (params) => {
    const { query, data, fields } = params;
    if (query) {
        const words = getWords(query);
        return data.filter((item) => {
            const stringToMatch = mapValuesToString(item, fields);
            return words.every((word) => {
                const regex = new RegExp(escapeRegExp(word), 'i');
                return regex.test(stringToMatch);
            });
        });
    }
    return data;
};

export default filterByFields;
