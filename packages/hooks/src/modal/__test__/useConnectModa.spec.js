import { renderHook, act } from '@testing-library/react-hooks';
import store, { initialDefaultProps } from '../store';
import useConnectModal from '../useConnectModal';

describe('useConnectModal', () => {
    it('should return initialDefaultProps', () => {
        const { result } = renderHook(() => useConnectModal('test'));
        expect(result.current).toEqual(initialDefaultProps);
    });
    it('should return combination initialDefaultProps with second parameter', () => {
        const foo = { bar: 'baz', title: 'test' };
        const { result } = renderHook(() => useConnectModal('test', foo));
        expect(result.current).toEqual({ ...initialDefaultProps, ...foo });
    });
    it('should return object passed in setProps', async () => {
        const foo = { bar: 'baz', title: 'test' };
        const { result } = renderHook(() => useConnectModal('test'));
        const [, setProps] = store.get('test');
        act(() => {
            setProps(foo);
        });
        expect(result.current).toEqual(foo);
    });
});
