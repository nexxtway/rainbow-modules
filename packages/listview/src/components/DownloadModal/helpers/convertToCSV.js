import formatValue from './formatValue';

const convertToCSV = (data) => {
    const array = [Object.keys(data[0])].concat(data);
    return array
        .map((item) => {
            return Object.values(item).map(formatValue).toString();
        })
        .join('\n');
};

export default convertToCSV;
