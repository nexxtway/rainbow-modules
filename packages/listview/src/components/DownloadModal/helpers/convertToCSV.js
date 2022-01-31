const convertToCSV = (data) => {
    const array = [Object.keys(data[0])].concat(data);
    return array
        .map((item) => {
            return Object.values(item).toString();
        })
        .join('\n');
};

export default convertToCSV;
