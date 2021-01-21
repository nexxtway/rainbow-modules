import store, { initialDefaultProps } from './store';

const useOpenModal = (modalId) => {
    const openModal = (props) => {
        if (store.has(modalId)) {
            const [defaultProps, setProps] = store.get(modalId);
            setProps({
                ...initialDefaultProps,
                ...defaultProps,
                ...props,
                isOpen: true,
                onRequestClose: () =>
                    setProps({ ...initialDefaultProps, ...defaultProps, isOpen: false }),
            });
        }
    };
    const closeModal = () => {
        if (store.has(modalId)) {
            const [defaultProps, setProps] = store.get(modalId);
            setProps({ ...initialDefaultProps, ...defaultProps, isOpen: false });
        }
    };
    return [openModal, closeModal];
};

export default useOpenModal;
