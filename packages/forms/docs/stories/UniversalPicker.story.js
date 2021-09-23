/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Application, RenderIf } from 'react-rainbow-components';
import { Check, Plus, Visa } from '@rainbow-modules/icons';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from 'react-rainbow-components/styles/borderRadius';
import Design from './icons/design';
import Photographer from './icons/photographer';
import Programmer from './icons/programmer';
import { UniversalPicker, UniversalPickerOption } from '../../src';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledOption = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.label};
    margin: 6px;
    font-size: 15px;
`;

export const BasicUniversalPicker = () => {
    const [value, setValue] = useState('option-2');
    return (
        <Application>
            <Container>
                <UniversalPicker value={value} onChange={setValue}>
                    <UniversalPickerOption name="option-1">
                        <StyledOption>Option 1</StyledOption>
                    </UniversalPickerOption>
                    <UniversalPickerOption name="option-2">
                        <StyledOption>Option 2</StyledOption>
                    </UniversalPickerOption>
                    <UniversalPickerOption name="option-3">
                        <StyledOption>Option 3</StyledOption>
                    </UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

const StyledCheckedTriangle = attachThemeAttrs(styled.span)`
    position: absolute;
    top: -1px;
    right: -1px;
    margin: 0;
    padding: 0;
    border: 1.5rem solid transparent;
    border-right-color: ${(props) => props.palette.brand.main};
    border-top-color: ${(props) => props.palette.brand.main};
    border-radius: 0 20px 0 0;
`;

const StyledCheckmarkIcon = attachThemeAttrs(styled(Check))`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height:10px;
    color: ${(props) => props.palette.getContrastText(props.palette.brand.main)};
`;

const sizeMap = { large: '210px', medium: '142px', small: '100px' };

const StyledItem = attachThemeAttrs(styled.span)`
    position: relative;
    height: ${(props) => sizeMap[props.size] || sizeMap.medium};
    width: ${(props) => sizeMap[props.size] || sizeMap.medium};
    background-color: ${(props) => props.palette.background.main};
    border: solid 2px ${(props) => props.palette.border.divider};
    border-radius: 22px;
    box-shadow: ${(props) => props.shadows.shadow_4};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(props) =>
        props.isHover &&
        `
        border: solid 1.5px ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_2};
        cursor: pointer;
    `};

    ${(props) =>
        props.isFocused &&
        `
        border: solid 1px ${props.palette.brand.light};
        box-shadow: ${props.shadows.shadow_4}, ${props.shadows.brand};
    `};

    ${(props) =>
        props.isSelected &&
        `
        border: solid 2px ${props.palette.brand.main};
    `};

    ${(props) =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border: solid 1.5px ${props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        cursor: not-allowed;
    `};
`;

const Item = (props) => {
    const { children, ...rest } = props;
    const { isSelected } = rest;

    return (
        <StyledItem {...rest}>
            <RenderIf isTrue={isSelected}>
                <StyledCheckedTriangle />
                <StyledCheckmarkIcon />
            </RenderIf>
            {children}
        </StyledItem>
    );
};

const StyledHeader = attachThemeAttrs(styled.h1)`
    color: ${(props) => props.palette.text.main};
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const StyledLabel = attachThemeAttrs(styled.h2)`
    margin-top:6px
    color: ${(props) => props.palette.text.label};
    font-size: 15px;
    font-weight: 300;
`;

export const BasicVisualPicker = () => {
    const [value, setValue] = useState('option-2');
    return (
        <Application>
            <Container>
                <StyledHeader>What are you doing?</StyledHeader>
                <UniversalPicker label="Select Option" value={value} onChange={setValue}>
                    <UniversalPickerOption component={Item} name="option-1">
                        <Design />
                        <StyledLabel>Design</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-2">
                        <Photographer />
                        <StyledLabel>Photographer</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-3">
                        <Programmer />
                        <StyledLabel>Programmer</StyledLabel>
                    </UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

export const MultipleVisualPicker = () => {
    const [value, setValue] = useState(['option-2']);
    return (
        <Application>
            <Container>
                <StyledHeader>What are you doing?</StyledHeader>
                <UniversalPicker label="Select Option" value={value} onChange={setValue} multiple>
                    <UniversalPickerOption component={Item} name="option-1">
                        <Design />
                        <StyledLabel>Design</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-2">
                        <Photographer />
                        <StyledLabel>Photographer</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-3">
                        <Programmer />
                        <StyledLabel>Programmer</StyledLabel>
                    </UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

const StyledRadioItem = attachThemeAttrs(styled.span)`
    position: relative;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.palette.background.main};
    border: solid 1px ${(props) => props.palette.border.divider};
    border-radius: 14px;
    box-shadow: ${(props) => props.shadows.shadow_4};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props) =>
        props.isHover &&
        `
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_2};
        cursor: pointer;
    `};

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

    ${(props) =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border: solid 1px ${props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        cursor: not-allowed;
    `};
`;

const getInitialBorder = (props) => {
    if (props.error) {
        return `2px solid ${props.palette.error.main}`;
    }
    return `1px solid ${props.palette.border.divider}`;
};

const getColor = (props) => {
    if (props.error) {
        return props.palette.error.main;
    }
    return props.palette.brand.main;
};

const getShadow = (props) => {
    if (props.error) {
        return props.shadows.error;
    }
    return props.shadows.brand;
};

const StyledRadio = attachThemeAttrs(styled.span)`
    position: relative;
    width: 20px;
    height: 20px;
    padding: 0;
    background: ${(props) => props.palette.background.main};
    border: ${getInitialBorder};
    border-radius: ${BORDER_RADIUS_2};
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    

    &::after {
        content: '';
        position: absolute;
        height: 12px;
        width: 12px;
        top: 2px;
        left: 2px;
        background: transparent;
        border-radius: ${BORDER_RADIUS_2};
        box-sizing: border-box;
    }

    ${(props) =>
        props.isSelected &&
        `
        background: ${props.palette.background.main};
        border: 2px solid;
        border-color: ${getColor(props)};

        &::after {
            background: ${getColor(props)};
            box-sizing: border-box;
        }
    `};

    ${(props) =>
        props.isFocused &&
        `
        border: 2px solid;
        border-color: ${getColor(props)};
        box-shadow: ${getShadow(props)};
    `};

    ${(props) =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border-color: ${props.palette.border.divider};

        &::after {
            background: ${props.palette.background.main};
            box-sizing: border-box;
        }
    `};
`;

const RadioItem = ({ children, ...rest }) => (
    <StyledRadioItem {...rest}>
        <div>{children}</div>
        <StyledRadio {...rest} />
    </StyledRadioItem>
);

const RadioPicker = ({ children, ...rest }) => (
    <UniversalPicker {...rest} multiple={false} direction="vertical">
        {children}
    </UniversalPicker>
);

const StyledContent = styled.div`
    display: flex;
`;

const StyledIcon = attachThemeAttrs(styled.span)`
    width: 53px;
    height: 38px;
    margin-right: 20px;
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.brand.main};
    border: 1px solid ${(props) => props.palette.border.divider};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLabelNewCard = attachThemeAttrs(styled('span'))`
color: ${(props) => props.palette.text.main};
    font-size: 18px;
    line-height: 2;
`;

const StyledCreditCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabelCard = attachThemeAttrs(styled('span'))`
    color: ${(props) => props.palette.text.header};
    font-size: 14px;
    line-height: 1;
`;

const StyledNumberCard = attachThemeAttrs(styled('span'))`
    color: ${(props) => props.palette.text.main};
    font-size: 16px;
    line-height: 1.5;
`;

const theme = {
    rainbow: {
        palette: { brand: '#00ab8e' },
    },
};

const styleRadioPicker = { width: '500px', alignSelf: 'center' };

export const BasicRadioPicker = () => {
    const [value, setValue] = useState('card-1');
    return (
        <Application theme={theme}>
            <Container>
                <RadioPicker
                    label="Pay With"
                    value={value}
                    onChange={setValue}
                    style={styleRadioPicker}
                >
                    <UniversalPickerOption component={RadioItem} name="new-card">
                        <StyledContent>
                            <StyledIcon>
                                <Plus />
                            </StyledIcon>
                            <StyledLabelNewCard>Enter a new card</StyledLabelNewCard>
                        </StyledContent>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={RadioItem} name="card-1">
                        <StyledContent>
                            <StyledIcon>
                                <Visa />
                            </StyledIcon>
                            <StyledCreditCard>
                                <StyledLabelCard>Visa</StyledLabelCard>
                                <StyledNumberCard>•••• •••• •••• 1111</StyledNumberCard>
                            </StyledCreditCard>
                        </StyledContent>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={RadioItem} name="card-2">
                        <StyledContent>
                            <StyledIcon>
                                <Visa />
                            </StyledIcon>
                            <StyledCreditCard>
                                <StyledLabelCard>Visa</StyledLabelCard>
                                <StyledNumberCard>•••• •••• •••• 2222</StyledNumberCard>
                            </StyledCreditCard>
                        </StyledContent>
                    </UniversalPickerOption>
                </RadioPicker>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/UniversalPicker',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
