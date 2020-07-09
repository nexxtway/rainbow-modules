/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
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
            <div>
                <input
                    id="outside-click-input-1"
                    type="checkbox"
                    checked={isListening}
                    onChange={(event) => setIsListening(event.target.checked)}
                />
                <label htmlFor="outside-click-input-1">isListening</label>
            </div>
            <br />
            <button ref={targetRef} type="button">
                Click Me and Click Outside Me
            </button>
            <p>
                Counter:
                {counter}
            </p>
        </div>
    );
}
