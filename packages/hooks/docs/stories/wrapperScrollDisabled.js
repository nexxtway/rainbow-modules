import React, { useState } from 'react';
import { CheckboxToggle } from 'react-rainbow-components';
import { useScrollDisabled } from '../../src';

export default function WrapperScrollDisabled() {
    const [isDisabled, setIsDisabled] = useState(false);
    useScrollDisabled(isDisabled);
    return (
        <CheckboxToggle
            label="Enable and disabled scroll"
            value={isDisabled}
            onChange={(event) => setIsDisabled(event.target.checked)}
        />
    );
}
