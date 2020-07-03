/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../src';

export default function WrapperOutsideClick() {
    const [counter, setCounter] = useState(0);
    const [isListening, setIsListening] = useState(true);
    const ref = useRef();
    useOutsideClick(
        ref,
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
            <span ref={ref}>
                <button type="button">Click Me and Click Outside Me</button>
            </span>
            <p>
                counter:
                {counter}
            </p>
        </div>
    );
}
