import React, { useState, useRef } from 'react';
import { CheckboxToggle, Button } from 'react-rainbow-components';
import { useOutsideClick } from '../../src';

export default function WrapperOutsideClick() {
    const [counter, setCounter] = useState(0);
    const [isListening, setIsListening] = useState(true);
    const targetRef = useRef();
    useOutsideClick(
        targetRef,
        () => {
            setCounter((s) => s + 1);
        },
        isListening,
    );
    return (
        <div>
            <CheckboxToggle
                label="Enable and disabled to listener the click outside"
                value={isListening}
                onChange={(event) => setIsListening(event.target.checked)}
            />
            <p>
                <span>Click outside counter: </span>
                {counter}
            </p>
            <span ref={targetRef}>
                <Button label="Click Me and Click Outside Me" variant="outline-brand" />
            </span>
        </div>
    );
}
