import isPhoneNumber from '../isPhoneNumber';

describe('isPhoneNumber', () => {
    it('should return true', () => {
        const values = [
            '1234567890',
            '123-456-7890',
            '123.456.7890',
            '123 456 7890',
            '(123) 456-7890',
            '+1234567890',
            '+254728530234',
            '+299 12 34 56',
            '+94766660206',
            '0811 778 998',
            '0811 7785 9983',
            '+15673628910',
            '+1(567)3628910',
            '+1(567)362-8910',
            '+1(567) 362-8910',
            '1(567)362-8910',
            '1(567)362 8910',
        ];
        values.forEach((value) => {
            expect(isPhoneNumber(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [
            '12345',
            '123--7890',
            '123.7890',
            '123 23234',
            'sdfsfdfsfds',
            '',
            '1',
            'DFDFGFGJKLmZXJtZtesting123',
            '+123',
            '-123',
        ];
        values.forEach((value) => {
            expect(isPhoneNumber(value)).toBe(false);
        });
    });
});
