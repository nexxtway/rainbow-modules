import styled, { css } from 'styled-components';
import HiddenElement from 'react-rainbow-components/components/Structural/hiddenElement';
import {
    getContrastText,
    isValidColor,
    replaceAlpha,
} from 'react-rainbow-components/styles/helpers/color';
import { Check } from '@rainbow-modules/icons';

const resolveBackgroundColor = (props) => {
    const { backgroundColor } = props;
    if (isValidColor(backgroundColor)) {
        return backgroundColor;
    }
    return props.theme.rainbow.palette.background.main;
};

const resolveColor = (props) => {
    const { color, backgroundColor } = props;
    if (isValidColor(color)) {
        return color;
    }
    if (isValidColor(backgroundColor)) {
        return getContrastText(backgroundColor);
    }
    return getContrastText(props.theme.rainbow.palette.background.main);
};

const CssContent = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 6px 15px;
    border-radius: 14px;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
    border: solid 1px rgba(227, 229, 237, 0.25);
`;

export const StyledContainer = styled.div`
    min-width: 190px;

    ${(props) =>
        props.hasMargin &&
        `
        margin: 0 5px 10px 5px;
    `}

    ${(props) =>
        props.variant === 'badge' &&
        `
        min-width: auto;
        width: auto;
    `}
`;

export const StyledInput = styled(HiddenElement)`
    &:focus {
        label {
            border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
            box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
        }
    }

    :checked {
        label {
            border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
        }
    }
`;

export const StyledContent = styled.div`
    ${CssContent};
    background: ${resolveBackgroundColor};

    ${(props) =>
        props.variant === 'badge' &&
        `
        flex-direction: row;
        justify-content: space-between;
        align-items: center; 
        padding: 0 0 0 16px;
        border-radius: 64px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
        border: solid 1px transparent;
        background: ${props.theme.rainbow.palette.background.main};
    `};

    ${(props) =>
        props.isPicker &&
        `
        position: relative;
    
        :hover {
            cursor: pointer;
            box-shadow: ${props.theme.rainbow.shadows.shadow_6};
        }
    `};

    ${(props) =>
        props.variant === 'badge' &&
        props.isPicker &&
        `
        flex-direction: row;
        justify-content: space-between;
        align-items: center; 
        padding: 0 0 0 16px;
        border-radius: 64px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
        border: solid 1px transparent;
        background: ${props.theme.rainbow.palette.background.main};

        :hover {
            box-shadow: 0 8px 12px 0 #e3e5ed;
        }
    `}
`;

export const StyledLabelText = styled.h2`
    font-size: 14px;
    color: ${resolveColor};
    opacity: 0.7;

    ${(props) =>
        props.variant === 'badge' &&
        `
        margin-right: 10px;
        color: ${getContrastText(props.theme.rainbow.palette.background.main)};
        opacity: 1;
    `};
`;

export const StyledValue = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: ${resolveColor};
    background: ${resolveBackgroundColor};

    ${(props) =>
        props.variant === 'badge' &&
        `
        font-size: 18px;
        border-radius: 64px;
        line-height: 32px;
        min-width: 40px;
        padding: 0 12px;
        border: 4px solid ${props.theme.rainbow.palette.background.main};
        display: inline-flex;
        box-sizing: border-box;
    `}

    ${(props) =>
        props.checked &&
        props.variant === 'badge' &&
        `
        border: 4px solid ${replaceAlpha(props.theme.rainbow.palette.background.main, 0.7)};
    `}
`;

export const StyledCheckmarkContainer = styled.div`
    position: absolute;
    top: 5px;
    right: 8px;
    color: ${resolveColor};

    ${(props) =>
        props.variant === 'badge' &&
        `
        left: -8px;
        top: calc(50% - 8px);
        width: 18px;
        height: 18px;
        border-radius: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props.theme.rainbow.palette.brand.main};
    `}
`;

export const StyledCheck = styled(Check)`
    color: ${resolveColor};

    ${(props) =>
        props.variant === 'badge' &&
        `
        width: 10px;
        height: 10px;
    `}
`;
