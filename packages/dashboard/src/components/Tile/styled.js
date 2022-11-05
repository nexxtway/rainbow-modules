import styled, { css } from 'styled-components';
import { getContrastText, isValidColor, replaceAlpha } from '@rainbow-modules/colors';
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

const HiddenElement = styled.span`
    position: absolute !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    text-transform: none !important;
    white-space: nowrap !important;

    ${(props) =>
        props.as === 'input' &&
        `
            box-sizing: border-box;
        `};
    ${(props) =>
        props.as === 'label' &&
        `
            box-sizing: border-box;
        `};
`;

const CssContent = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 6px 15px;
    border-radius: 14px;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
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

    ${(props) =>
        props.variant === 'flat' &&
        `
        min-width: 120px;
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
    border: 1px solid rgba(227, 229, 237, 0.25);

    ${(props) =>
        props.variant === 'badge' &&
        `
        flex-direction: row;
        justify-content: space-between;
        align-items: center; 
        padding: 0 0 0 16px;
        border-radius: 64px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid transparent;
        background: ${props.theme.rainbow.palette.background.main};
    `};

    ${(props) =>
        props.variant === 'flat' &&
        `
        border-radius: 8px;
        box-shadow: 0 0 0 0 transparent;
        border: 1px solid ${props.theme.rainbow.palette.border.disabled};
    `}

    ${(props) =>
        props.isPicker &&
        `
        position: relative;
    `};
    ${(props) =>
        props.isPicker &&
        !props.isLoading &&
        `
        :hover {
            cursor: pointer;
            box-shadow: ${props.theme.rainbow.shadows.shadow_6};
        }
    `}

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
    `}
    ${(props) =>
        props.variant === 'badge' &&
        props.isPicker &&
        !props.isLoading &&
        `
        :hover {
            box-shadow: 0 8px 12px 0 #e3e5ed;
        }
    `}
`;

export const StyledLabelText = styled.h2`
    font-size: 12px;
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

export const StyledLabelLoadingShape = styled.div`
    overflow: hidden;
    border-radius: 1rem;
    height: 12px;
    margin: 1px;
    ${(props) =>
        props.variant === 'badge' &&
        `
        margin-right: 10px;
        width: 60px;
        height: 10px;
    `};
    ${(props) =>
        props.variant === 'flat' &&
        `
        width: 80px;
    `};
`;

export const StyledValue = styled.h1`
    font-size: 24px;
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

export const StyledValueLoadingShape = styled.div`
    overflow: hidden;
    border-radius: 1rem;
    margin: 4px;
    width: 38px;
    height: 32px;

    ${(props) =>
        props.variant !== 'badge' &&
        `
        height: 20px;
        margin-top: 12px;
        margin-bottom: 8px;
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
