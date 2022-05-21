import { useCallback } from 'react';
import store, { initialDefaultProps } from './store';

const useOpenModal = (modalId) => {
    const openModal = useCallback(
        (props) => {
            if (store.has(modalId)) {
                const [defaultProps, setProps] = store.get(modalId);
                const { onRequestClose = () => {}, ...rest } = props || defaultProps;
                setProps({
                    ...initialDefaultProps,
                    ...defaultProps,
                    ...rest,
                    isOpen: true,
                    onRequestClose: () => {
                        setProps({ ...initialDefaultProps, ...defaultProps, isOpen: false });
                        onRequestClose();
                    },
                });
            }
        },
        [modalId],
    );
    const closeModal = useCallback(() => {
        if (store.has(modalId)) {
            const [defaultProps, setProps] = store.get(modalId);
            setProps({ ...initialDefaultProps, ...defaultProps, isOpen: false });
        }
    }, [modalId]);
    return [openModal, closeModal];
};

export default useOpenModal;
