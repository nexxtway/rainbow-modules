export default function getNormalizedData(data) {
    const labels = [];
    const firstDataset = [];
    const secondDataset = [];
    if (Array.isArray(data)) {
        data.forEach((value) => {
            const { label, values } = value;
            if (label) {
                labels.push(label);
                firstDataset.push((values && !Number.isNaN(Number(values[0])) && values[0]) || 0);
                secondDataset.push((values && !Number.isNaN(Number(values[1])) && values[1]) || 0);
            }
        });
    }
    return [labels, [firstDataset, secondDataset]];
}
