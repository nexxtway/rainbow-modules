import { useMemo } from 'react';
import { ESCAPE_KEY } from 'react-rainbow-components/libs/constants';

export default function useKeyHandler(props) {
    const { onRequestClose } = props;
    const keyHandlerMap = useMemo(
        () => ({
            [ESCAPE_KEY]: () => onRequestClose(),
        }),
        [onRequestClose],
    );

    const keyDownHandler = (event, childProps) => {
        const { keyCode, target, currentTarget } = event;
        if (currentTarget.contains(target) && keyHandlerMap[keyCode]) {
            event.preventDefault();
            keyHandlerMap[keyCode](childProps);
        }
    };

    return {
        keyDownHandler,
    };
}
