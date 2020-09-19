import styled, { css } from 'styled-components';
import HiddenElement from 'react-rainbow-components/components/Structural/hiddenElement';

export const StyledContainer = styled.div`
    min-width: 190px;
    ${(props) =>
        props.hasMargin &&
        `
        margin: 0 5px 10px 5px;
    `}
`;

export const StyledInput = styled(HiddenElement)`
    &:focus + label {
        border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
    }

    :checked + label {
        border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
    }
`;

const CssContent = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 6px 15px;
    border-radius: 14px;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
    border: solid 1px rgba(227, 229, 237, 0.25);
`;

export const StyledContent = styled.div`
    ${CssContent};
`;

export const StyledLabel = styled.label`
    ${CssContent}
    position: relative;

    &:hover {
        cursor: pointer;
        border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
    }
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
