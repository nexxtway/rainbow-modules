import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import styled from 'styled-components';

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

const BORDER_RADIUS_2 = '12rem';

export const StyledRadio = attachThemeAttrs(styled.span)`
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
    transition: all 0.2s ease;

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
        opacity: 1;
        transform: scale(0.1, 0.1);
        transition: all 0.2s ease-in;
    }

    ${(props) =>
        props.isSelected &&
        `
        background: ${props.palette.background.main};
        border: 2px solid;
        border-color: ${getColor(props)};

        &::after {
            opacity: 1;
            transform: scale(1, 1);
            transition: all 0.2s ease-in;
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

export const StyledRadioItem = attachThemeAttrs(styled.span)`
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

export const StyledContent = styled.div`
    display: flex;
`;

export const StyledIcon = attachThemeAttrs(styled.span)`
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

export const StyledLabelNewCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.main};
    font-size: 18px;
    line-height: 2;
`;

export const StyledCreditCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLabelCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.header};
    font-size: 14px;
    line-height: 1;
`;

export const StyledNumberCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.main};
    font-size: 16px;
    line-height: 1.5;
`;
