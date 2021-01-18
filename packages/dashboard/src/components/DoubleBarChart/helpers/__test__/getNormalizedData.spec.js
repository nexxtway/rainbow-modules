import getNormalizedData from '../getNormalizedData';

describe('getNormalizedData', () => {
    it('should return an array with 3 items', () => {
        const data = [
            { label: '1/21', values: [50, 75] },
            { label: '2/21', values: [75, 90] },
            { label: '3/21', values: [95, 100] },
        ];
        const array = getNormalizedData(data);
        expect(array.length).toBe(3);
    });

    it('should return the correct labels', () => {
        const data = [
            { label: '1/21', values: [50, 75] },
            { label: '2/21', values: [75, 90] },
            { label: '3/21', values: [95, 100] },
        ];
        const expected = ['1/21', '2/21', '3/21'];
        const [labels] = getNormalizedData(data);
        expect(labels).toEqual(expected);
    });

    it('should return the correct datasets', () => {
        const data = [
            { label: '1/21', values: [50, 75] },
            { label: '2/21', values: [75, 90] },
            { label: '3/21', values: [95, 100] },
        ];
        const expected = [
            [50, 75, 95],
            [75, 90, 100],
        ];
        const [, firstDataset, secondDataset] = getNormalizedData(data);
        expect(firstDataset).toEqual(expected[0]);
        expect(secondDataset).toEqual(expected[1]);
    });

    it('should fill missing or wrong data with zero', () => {
        const data = [
            { label: '1/21', values: [50, undefined] },
            { label: '2/21', values: [75, 90] },
            { label: '3/21', values: [] },
            { label: '4/21', values: ['string', 100] },
        ];
        const expected = [
            [50, 75, 0, 0],
            [0, 90, 0, 100],
        ];
        const [, firstDataset, secondDataset] = getNormalizedData(data);
        expect(firstDataset).toEqual(expected[0]);
        expect(secondDataset).toEqual(expected[1]);
    });

    it('should return empty arrays for labels and dataset when data is wrong', () => {
        const datas = [undefined, 0, 'string', {}];
        datas.forEach((data) => {
            const [labels, firstDataset, secondDataset] = getNormalizedData(data);
            expect(labels).toEqual([]);
            expect(firstDataset).toEqual([]);
            expect(secondDataset).toEqual([]);
        });
    });
});
