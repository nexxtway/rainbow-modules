import { useMemo } from 'react';
import { ESCAPE_KEY } from 'react-rainbow-components/libs/constants';
import { isEmpty } from '@rainbow-modules/validation';

export default function useKeyHandler(props) {
    const { value, onChange, onRequestClose } = props;
    const keyHandlerMap = useMemo(
        () => ({
            [ESCAPE_KEY]: () => {
                if (isEmpty(value)) return onRequestClose();
                return onChange('');
            },
        }),
        [onChange, onRequestClose, value],
    );

    const keyDownHandler = (event) => {
        const { keyCode, target, currentTarget } = event;
        if (currentTarget.contains(target) && keyHandlerMap[keyCode]) {
            event.preventDefault();
            keyHandlerMap[keyCode]();
        }
    };

    return {
        keyDownHandler,
    };
}
