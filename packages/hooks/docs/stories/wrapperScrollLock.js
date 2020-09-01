import React, { useState } from 'react';
import { CheckboxToggle } from 'react-rainbow-components';
import { useScrollLock } from '../../src';

export default function WrapperScrollLock() {
    const [isLock, setIsLock] = useState(false);
    useScrollLock(isLock);
    return (
        <CheckboxToggle
            label="Lock and unlock scroll"
            value={isLock}
            onChange={(event) => setIsLock(event.target.checked)}
        />
    );
}
