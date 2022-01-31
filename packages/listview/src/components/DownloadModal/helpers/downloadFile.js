import convertToCSV from './convertToCSV';

const optionsMap = {
    json: 'application/json',
    csv: 'text/csv',
};

const downloadFile = (data, format, fileName) => {
    const link = document.createElement('a');
    const options = {
        type: optionsMap[format],
    };
    const newData = format === 'json' ? JSON.stringify(data, null, 4) : convertToCSV(data);
    const blob = new Blob([newData], options);
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${fileName}.${format}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
};

export default downloadFile;
