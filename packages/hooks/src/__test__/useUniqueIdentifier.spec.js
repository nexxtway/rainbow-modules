import { renderHook } from '@testing-library/react-hooks';
import useUniqueIdentifier from '../useUniqueIdentifier';

describe('useUniqueIdentifier', () => {
    it('should return unique identifier', async () => {
        const identifiers = Array.from(Array(3));
        identifiers.forEach((_value, index) => {
            const { result } = renderHook(() => useUniqueIdentifier('test'));
            expect(result.current).toBe(`test-${index + 1}`);
        });
    });
});
