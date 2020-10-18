import styled, { css } from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

export const StyledContainer = styled.div`
    min-width: 190px;
    ${(props) =>
        props.hasMargin &&
        `
        margin: 0 5px 10px 5px;
    `}
`;

const CssContent = css`
    width: 100%;
    padding: 10px 15px 6px 15px;
    border: solid 1px rgba(227, 229, 237, 0.25);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const StyledContent = attachThemeAttrs(styled.div)`
    ${CssContent};
    box-shadow: ${(props) => props.shadows.shadow_4};

`;

export const StyledOption = attachThemeAttrs(styled.div)`
    position: relative;
    ${CssContent};
    box-shadow: ${(props) => props.shadows.shadow_4};

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
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
    `};

    ${(props) =>
        props.isSelected &&
        `
        border: solid 1px ${props.palette.brand.main};
    `};
`;

export const StyledLabelText = styled.p`
    font-size: 14px;
`;

export const StyledValue = styled.h1`
    font-size: 32px;
    font-weight: 800;
`;

export const StyledCheckmarkContainer = styled.div`
    position: absolute;
    top: 5px;
    right: 12px;
`;
