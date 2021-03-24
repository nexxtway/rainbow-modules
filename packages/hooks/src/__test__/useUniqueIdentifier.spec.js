import { renderHook } from '@testing-library/react-hooks';
import useUniqueIdentifier from '../useUniqueIdentifier';

describe('useUniqueIdentifier', () => {
    it('should return unique identifier', async () => {
        const ids = [];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < 5; index++) {
            const { result } = renderHook(() => useUniqueIdentifier('test'));
            ids.push(result.current);
        }
        const uniqueIds = [...new Set(ids)];
        expect(uniqueIds.length).toBe(5);
    });
});
