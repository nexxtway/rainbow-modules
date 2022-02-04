import convertToCSV from '../convertToCSV';

describe('convertToCSV', () => {
    it('should convert data to CSV', () => {
        const data = [
            {
                name: 'Item 1',
                color: { r: 0, g: 255, b: 0 },
                size: 'X-Large',
                max: '500',
                format: 'csv',
            },
            { name: 'Item 2', color: 'Red', size: 'X-Medium', max: '500', format: 'csv' },
            { name: 'Item 3', color: () => 'Blue', size: 'X-Small', max: '500', format: 'csv' },
        ];
        const result = convertToCSV(data);
        expect(result).toBe(
            'name,color,size,max,format\nItem 1,object,X-Large,500,csv\nItem 2,Red,X-Medium,500,csv\nItem 3,function,X-Small,500,csv',
        );
    });
});
