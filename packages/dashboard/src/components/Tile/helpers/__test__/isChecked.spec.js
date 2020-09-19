import isChecked from '../isChecked';

describe('isChecked', () => {
    it('should return true when is multiple and name is include in value', () => {
        const props = { multiple: true, value: [0, 1, 2], name: 1 };
        expect(isChecked(props)).toBe(true);
    });

    it('should return false when is multiple and name is not included in value', () => {
        const props = { multiple: true, value: [0, 1, 2], name: 3 };
        expect(isChecked(props)).toBe(false);
    });

    it('should return true when is not multiple and name is equal to value', () => {
        const props = { multiple: false, value: '1', name: '1' };
        expect(isChecked(props)).toBe(true);
    });

    it('should return false when is not multiple and name is different to value', () => {
        const props = { multiple: false, value: '2', name: '1' };
        expect(isChecked(props)).toBe(false);
    });

    it('should return false when is not multiple and value is not string', () => {
        const props = { multiple: false, value: 2, name: 1 };
        expect(isChecked(props)).toBe(false);
    });
});
