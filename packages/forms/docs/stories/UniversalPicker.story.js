/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Application, RenderIf } from 'react-rainbow-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from 'react-rainbow-components/styles/borderRadius';
import { Check, ClockFilled, Picture, HomeFilled, Plus } from '@rainbow-modules/icons';
import { UniversalPicker, UniversalPickerOption } from '../../src';
import Visa from '../assets/visa';

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const StyledOption = attachThemeAttrs(styled.span)`
    font-size: 15px;
    margin: 6px;
    color: ${(props) => props.palette.text.label};
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
    border: 1.5rem solid transparent;
    border-radius: 0 20px 0 0;
    border-right-color: ${(props) => props.palette.brand.main};
    border-top-color: ${(props) => props.palette.brand.main};
    margin: 0;
    padding: 0;
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
    height: ${(props) => sizeMap[props.size] || sizeMap.medium};
    width: ${(props) => sizeMap[props.size] || sizeMap.medium};
    border-radius: 22px;
    box-shadow: ${(props) => props.shadows.shadow_4};
    border: solid 2px ${(props) => props.palette.border.divider};
    background-color: ${(props) => props.palette.background.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${(props) =>
        props.isHover &&
        `
        cursor: pointer;
        border: solid 1.5px ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_2};
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
        border: solid 1.5px ${props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${props.palette.background.disabled};
        cursor: not-allowed;
    `};
`;

const Item = (props) => {
    const { state, children, disabled, size } = props;
    const { isSelected } = state;

    return (
        <StyledItem {...state} disabled={disabled} size={size}>
            <RenderIf isTrue={isSelected}>
                <StyledCheckedTriangle />
                <StyledCheckmarkIcon />
            </RenderIf>
            {children}
        </StyledItem>
    );
};

const StyledLabel = attachThemeAttrs(styled.h2)`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${(props) => props.palette.text.label};
`;

const styleIcon = { width: '50px', height: '40px' };

export const VisualPicker = () => {
    const [value, setValue] = useState('option-2');
    return (
        <Application>
            <Container>
                <UniversalPicker label="Select Option" value={value} onChange={setValue}>
                    <UniversalPickerOption component={Item} name="option-1">
                        <HomeFilled style={styleIcon} />
                        <StyledLabel>Home</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-2">
                        <Picture />
                        <StyledLabel>Picture</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-3">
                        <ClockFilled style={styleIcon} />
                        <StyledLabel>Clock</StyledLabel>
                    </UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

export const VisualPickerMultiple = () => {
    const [value, setValue] = useState(['option-2']);
    return (
        <Application>
            <Container>
                <UniversalPicker label="Select Option" value={value} onChange={setValue} multiple>
                    <UniversalPickerOption component={Item} name="option-1">
                        <HomeFilled style={styleIcon} />
                        <StyledLabel>Home</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-2">
                        <Picture />
                        <StyledLabel>Picture</StyledLabel>
                    </UniversalPickerOption>
                    <UniversalPickerOption component={Item} name="option-3">
                        <ClockFilled style={styleIcon} />
                        <StyledLabel>Clock</StyledLabel>
                    </UniversalPickerOption>
                </UniversalPicker>
            </Container>
        </Application>
    );
};

const StyledRadioItem = attachThemeAttrs(styled.span)`
    border-radius: 14px;
    box-shadow: ${(props) => props.shadows.shadow_4};
    border: solid 1px ${(props) => props.palette.border.divider};
    background-color: ${(props) => props.palette.background.main};
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;

    ${(props) =>
        props.isHover &&
        `
        cursor: pointer;
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_2};
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
        border: solid 1px ${props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${props.palette.background.disabled};
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
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    border: ${getInitialBorder};
    border-radius: ${BORDER_RADIUS_2};
    background: ${(props) => props.palette.background.main};
    box-sizing: border-box;
    padding: 0;

    &::after {
        content: '';
        height: 12px;
        width: 12px;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: ${BORDER_RADIUS_2};
        background: transparent;
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

const RadioItem = (props) => {
    const { state, children, disabled, error } = props;

    return (
        <StyledRadioItem {...state} disabled={disabled} error={error}>
            <div>{children}</div>
            <StyledRadio {...state} disabled={disabled} error={error} />
        </StyledRadioItem>
    );
};

const StyledRadioPicker = styled(UniversalPicker)`
    width: 500px;
    > div {
        flex-direction: column;
    }
`;

const StyledContent = styled.div`
    display: flex;
`;

const StyledIcon = attachThemeAttrs(styled.span)`
    width: 48px;
    height: 30px;
    border: 1px solid ${(props) => props.palette.border.divider};
    background-color: ${(props) => props.palette.background.main};
    border-radius: 5px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLabelNewCard = attachThemeAttrs(styled('span'))`
    font-size: 18px;
    line-height: 1.7;
    color: ${(props) => props.palette.text.main};
`;

const StyledCreditCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabelCard = attachThemeAttrs(styled('span'))`
    font-size: 14px;
    line-height: 1;
    color: ${(props) => props.palette.text.header};
`;

const StyledNumberCard = attachThemeAttrs(styled('span'))`
    font-size: 16px;
    line-height: 0.88;
    color: ${(props) => props.palette.text.main};
`;

const theme = {
    rainbow: {
        palette: { brand: '#00ab8e' },
    },
};

export const RadioPicker = () => {
    const [value, setValue] = useState('card-1');
    return (
        <Application theme={theme}>
            <Container>
                <StyledRadioPicker label="Pay With" value={value} onChange={setValue}>
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
                </StyledRadioPicker>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Forms/Stories/UniversalPicker',
    component: UniversalPicker,
};
