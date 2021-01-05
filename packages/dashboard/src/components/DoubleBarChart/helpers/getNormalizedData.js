export default function getNormalizedData(data) {
    const reducer = (accumulator, currentValue) => {
        const { label, values } = currentValue;
        if (label) {
            const [labels, firstDataset, secondDataset] = accumulator;
            const firstValue = (values && !Number.isNaN(Number(values[0])) && values[0]) || 0;
            const secondValue = (values && !Number.isNaN(Number(values[1])) && values[1]) || 0;
            return [
                [...labels, label],
                [...firstDataset, firstValue],
                [...secondDataset, secondValue],
            ];
        }
        return accumulator;
    };
    if (Array.isArray(data)) {
        return data.reduce(reducer, [[], [], []]);
    }
    return [[], [], []];
}
