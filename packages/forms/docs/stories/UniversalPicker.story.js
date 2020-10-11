import React, { useState } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import { UniversalPicker, UniversalPickerOption } from '../../src';

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

export const BasicFormUniversalPicker = () => {
    const [value, setValue] = useState('option-2');
    return (
        <Application>
            <Container>
                <UniversalPicker value={value} onChange={setValue}>
                    <UniversalPickerOption name="option-1">Option 1</UniversalPickerOption>
                    <UniversalPickerOption name="option-2">Option 2</UniversalPickerOption>
                    <UniversalPickerOption name="option-3">Option 3</UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Forms/Stories',
    component: UniversalPicker,
};
