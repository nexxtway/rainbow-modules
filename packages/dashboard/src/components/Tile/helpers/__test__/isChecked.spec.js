import isChecked from '../isChecked';

describe('isChecked', () => {
    it('should return true when is multiple and name is include in value', () => {
        expect(isChecked(true, [0, 1, 2], 1)).toBe(true);
    });

    it('should return false when is multiple and name is include in value', () => {
        expect(isChecked(true, [0, 1, 2], 3)).toBe(false);
    });

    it('should return true when is not multiple and name is equal to value', () => {
        expect(isChecked(false, '1', '1')).toBe(true);
    });

    it('should return false when is not multiple and name is different to value', () => {
        expect(isChecked(false, '2', '1')).toBe(false);
    });

    it('should return false when is not multiple and value is not string', () => {
        expect(isChecked(false, 2, 1)).toBe(false);
    });
});
