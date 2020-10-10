/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import { UniversalPicker, UniversalPickerItem } from '../../src';

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const StyledItem = styled.div.attrs((props) => props.theme.rainbow)`
    font-size: 0.8rem;
    padding: 5px;
    border: solid 1px ${(props) => props.palette.border.main};

    ${(props) =>
        props.isFocused &&
        `
        border: solid 1px ${props.palette.brand.light};
        box-shadow: ${props.shadows.shadow_4}, ${props.shadows.brand};
    `};

    ${(props) =>
        props.isSelected &&
        `
        border: solid 1px ${props.palette.brand.main};
    `};

    :hover {
        cursor: pointer;
        border: solid 1px ${(props) => props.palette.brand.main};
        box-shadow: ${(props) => props.shadows.shadow_2};
    }
`;

const Item = (props) => {
    const { state, children } = props;
    const { isSelected, isFocused } = state;

    return (
        <StyledItem isSelected={isSelected} isFocused={isFocused}>
            {children}
        </StyledItem>
    );
};

export const BasicFormUniversalPicker = () => {
    const [value, setValue] = useState('option-2');
    return (
        <Application>
            <Container>
                <UniversalPicker value={value} onChange={setValue}>
                    <UniversalPickerItem component={Item} name="option-1">
                        Option 1
                    </UniversalPickerItem>
                    <UniversalPickerItem component={Item} name="option-2">
                        Option 2
                    </UniversalPickerItem>
                    <UniversalPickerItem component={Item} name="option-3">
                        Option 3
                    </UniversalPickerItem>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Forms/Stories',
    component: UniversalPicker,
};
