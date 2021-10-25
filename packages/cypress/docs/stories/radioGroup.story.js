import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioGroup } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const options = [
    { value: 'radioOne', label: 'Radio One' },
    { value: 'radioTwo', label: 'Radio Two' },
    { value: 'radioThree', label: 'Radio Three' },
];

export const BasicRadioGroup = () => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container>
            <RadioGroup
                id="radiogroup"
                options={options}
                value={value}
                onChange={handleChange}
                label="Radio Group Label"
                error="This field is required"
            />
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/RadioGroup',
};
