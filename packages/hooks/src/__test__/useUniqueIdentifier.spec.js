import { renderHook } from '@testing-library/react-hooks';
import useUniqueIdentifier from '../useUniqueIdentifier';

describe('useUniqueIdentifier', () => {
    it('should return unique identifier', async () => {
        const { result } = renderHook(() => useUniqueIdentifier('test'));
        expect(result.current).toStrictEqual(expect.any(String));
    });
});
