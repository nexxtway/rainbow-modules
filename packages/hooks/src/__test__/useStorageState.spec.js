import { renderHook, act } from '@testing-library/react-hooks';
import useStorageState from '../useStorageState';

describe('useStorageState', () => {
    it('should return undefined by default', () => {
        const { result } = renderHook(() => useStorageState({ key: 'testing-key-1' }));
        expect(result.current).toEqual([undefined, expect.any(Function)]);
    });
    it('should return the default value passed', () => {
        const { result } = renderHook(() =>
            useStorageState({ key: 'testing-key-2', defaultValue: 'my-default-value' }),
        );
        expect(result.current[0]).toBe('my-default-value');
    });
    it('should return the value setted even when it is a falsy value', () => {
        const { result } = renderHook(() => useStorageState({ key: 'testing-key-2' }));
        act(() => {
            const [, setState] = result.current;
            setState(false);
        });
        const { result: result2 } = renderHook(() => useStorageState({ key: 'testing-key-2' }));
        expect(result2.current[0]).toBe(false);
    });
});
