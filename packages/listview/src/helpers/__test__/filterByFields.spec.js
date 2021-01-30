import filterByFields from '../filterByFields';

const initialData = [
    {
        customer: 'Carls Smith',
        trackingNumber: '6600802039',
        email: 'carlssmith@gmail.com',
        obj: { status: 'error' },
        id: '1234qwerty',
    },
    {
        customer: 'John Snow',
        trackingNumber: '6205259761',
        email: 'johnsnow@gmail.com',
        obj: { status: 'success' },
        id: '1234asdfgh',
    },
];

describe('filterByFields', () => {
    it('should return an array of objects filtered', () => {
        const filteredData = filterByFields({
            data: initialData,
            query: 'carls',
            fields: ['customer'],
        });
        expect(filteredData).toEqual([
            {
                customer: 'Carls Smith',
                trackingNumber: '6600802039',
                email: 'carlssmith@gmail.com',
                obj: { status: 'error' },
                id: '1234qwerty',
            },
        ]);
    });

    it('should return an array of objects filtered when fields is nested', () => {
        const filteredData = filterByFields({
            data: initialData,
            query: 'success',
            fields: ['obj.status'],
        });
        expect(filteredData).toEqual([
            {
                customer: 'John Snow',
                trackingNumber: '6205259761',
                email: 'johnsnow@gmail.com',
                obj: { status: 'success' },
                id: '1234asdfgh',
            },
        ]);
    });
});
