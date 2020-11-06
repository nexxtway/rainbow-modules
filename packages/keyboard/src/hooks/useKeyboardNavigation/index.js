import { useEffect, useContext } from 'react';
import { KeyboardNavigation } from '../..';
import useKeyboardNavigation from '../../components/KeyboardNavigation';

const useKeyboardNavigation = (config) => {
    const { containerRef, focus, onBlur = () => {} } = config;
    const { registerAsFocusable, unRegister } = useContext(KeyboardNavigation.context);
    useEffect(() => {
        registerAsFocusable({
            containerRef,
            focus,
            onBlur,
        });
        return () => {
            unRegister(containerRef);
        };
    });
    const handleKeydown = (event) => {
        switch (event.keyCode) {
            default:
                return;
        }
    };
    return {
        handleKeydown,
    };
};

export default useKeyboardNavigation;
