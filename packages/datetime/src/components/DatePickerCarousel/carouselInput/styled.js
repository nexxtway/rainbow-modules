import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLabelContainer = styled.div`
    padding: 0.5rem 1rem;
`;

export const StyledLabel = styled.button`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    border: 1px solid transparent;
    border-radius: 40px;
    background: transparent;
    padding: 0 0.8rem;
    height: 44px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
    background-clip: border-box;
    text-decoration: none;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    text-align: center;
    vertical-align: middle;
    transition: border 0.15s linear;
    overflow: visible;
    text-transform: none;
    appearance: button;
    box-sizing: border-box;

    & > svg {
        margin-left: 0.5rem;
        color: ${(props) => props.theme.rainbow.palette.brand.main};
    }

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover,
    &:focus,
    &:active,
    &:visited {
        text-decoration: none;
    }

    &:hover,
    &:focus {
        background: ${(props) => props.theme.rainbow.palette.background.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
    }

    &:focus {
        outline: 0;
        background: ${(props) => props.theme.rainbow.palette.background.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
    }

    &:active {
        background: ${(props) => props.theme.rainbow.palette.background.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
        transition: all 0.2s ease;
    }
`;
