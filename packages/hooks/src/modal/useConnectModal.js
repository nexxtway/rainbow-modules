import { useState } from 'react';
import store, { initialDefaultProps } from './store';

const useConnectModal = (modalId, defaultProps = {}) => {
    const [props, setProps] = useState({ ...initialDefaultProps, ...defaultProps });
    store.set(modalId, [defaultProps, setProps]);
    return props;
};

export default useConnectModal;
