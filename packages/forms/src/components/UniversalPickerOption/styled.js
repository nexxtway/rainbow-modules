import styled from 'styled-components';
import HiddenElement from 'react-rainbow-components/components/Structural/hiddenElement';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

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
