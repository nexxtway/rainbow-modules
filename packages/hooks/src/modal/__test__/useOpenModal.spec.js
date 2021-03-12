import { renderHook } from '@testing-library/react-hooks';
import store, { initialDefaultProps } from '../store';
import useOpenModal from '../useOpenModal';

let props = {};
const setProps = jest.fn((newProps) => {
    props = newProps;
});
const defaultProps = { foo: 'bar' };

describe('useOpenModal', () => {
    beforeAll(() => {
        setProps.mockClear();
    });
    it('should not call setProps when the store does not have defined the key', () => {
        const { result } = renderHook(() => useOpenModal('test'));
        const [openModal, closeModal] = result.current;
        openModal();
        closeModal();
        expect(setProps).toBeCalledTimes(0);
    });
    it('should call setProps with the combination of initialDefaultProps, defaultProps and isOpen true', () => {
        store.set('test', [defaultProps, setProps]);
        const { result } = renderHook(() => useOpenModal('test'));
        const [openModal] = result.current;
        openModal();
        expect(setProps).toHaveBeenCalledWith(
            expect.objectContaining({ ...initialDefaultProps, ...defaultProps, isOpen: true }),
        );
    });
    it('should call setProps with the combination of initialDefaultProps, defaultProps and isOpen false', () => {
        store.set('test', [defaultProps, setProps]);
        const { result } = renderHook(() => useOpenModal('test'));
        const [, closeModal] = result.current;
        closeModal();
        expect(setProps).toHaveBeenCalledWith(
            expect.objectContaining({ ...initialDefaultProps, ...defaultProps, isOpen: false }),
        );
    });
    it('should call setProps with the combination of initialDefaultProps, defaultProps and isOpen false when call onRequestClose', () => {
        store.set('test', [defaultProps, setProps]);
        const { result } = renderHook(() => useOpenModal('test'));
        const [openModal] = result.current;
        openModal();
        const { onRequestClose } = props;
        onRequestClose();
        expect(setProps).toHaveBeenLastCalledWith(
            expect.objectContaining({ ...initialDefaultProps, ...defaultProps, isOpen: false }),
        );
    });
});
