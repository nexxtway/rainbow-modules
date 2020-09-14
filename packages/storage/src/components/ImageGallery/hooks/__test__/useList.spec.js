import { renderHook, act } from '@testing-library/react-hooks';
import useList from '../useList';

describe('useList', () => {
    it('should return an empty array when initial is not an array', async () => {
        const initials = [undefined, 1, '', {}];
        initials.forEach((initial) => {
            const { result } = renderHook(() => useList(initial));
            expect(result.current.list).toStrictEqual([]);
        });
    });

    it('should return the same array is called', async () => {
        const initial = [1, 2, 3];
        const { result } = renderHook(() => useList(initial));
        expect(result.current.list).toStrictEqual(initial);
    });

    it('should return array of two element when remove is called', async () => {
        const initial = [1, 2, 3];
        const { result } = renderHook(() => useList(initial));
        act(() => {
            result.current.remove(1);
        });
        expect(result.current.list).toStrictEqual([2, 3]);
    });

    it('should return array of 4 element when put is called', async () => {
        const initial = [1, 2, 3];
        const { result } = renderHook(() => useList(initial));
        act(() => {
            result.current.put(4);
        });
        expect(result.current.list).toStrictEqual([1, 2, 3, 4]);
    });

    it('should return array of 4 element when unshift is called', async () => {
        const initial = [1, 2, 3];
        const { result } = renderHook(() => useList(initial));
        act(() => {
            result.current.unshift(4);
        });
        expect(result.current.list).toStrictEqual([4, 1, 2, 3]);
    });

    it('should return the same array when set is called ', async () => {
        const list = [1, 2, 3];
        const { result } = renderHook(() => useList());
        act(() => {
            result.current.set(list);
        });
        expect(result.current.list).toStrictEqual(list);
    });
});
