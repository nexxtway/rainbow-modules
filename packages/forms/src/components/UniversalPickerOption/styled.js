import styled from 'styled-components';
import { attachThemeAttrs } from 'react-rainbow-components';

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

export const StyledContainer = styled.div`
    position: relative;
    margin: 0 0.25rem 0.25rem 0.25rem;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
`;

export const StyledInput = styled(HiddenElement)`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;
`;

export const StyledItem = attachThemeAttrs(styled.div)`
    border: solid 1px ${(props) => props.palette.border.main};

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
