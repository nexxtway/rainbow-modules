import styled from 'styled-components';
import { Close } from '@rainbow-modules/icons';

interface IsSelected {
    isSelected?: boolean;
}

interface StyledOptionProps extends IsSelected {
    isHover?: boolean;
    isFocused?: boolean;
}

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.span`
    text-transform: uppercase;
    font-size: 1rem;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    padding: 0.3rem;
`;

export const StyledOption = styled.div<StyledOptionProps>`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.6rem;
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: transparent;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.875rem;

    :focus,
    :active {
        outline: none;
    }

    ${(props) =>
        props.isSelected &&
        `
        font-family: Lato Bold, Helvetica, sans-serif;
        background-color: ${props.theme.rainbow.palette.background.highlight};
        color: ${props.theme.rainbow.palette.text.main};
        cursor: default;
        `}

    ${(props) =>
        props.isHover &&
        `
        background-color: ${props.theme.rainbow.palette.action.hover};
        cursor: pointer;
        `}

    ${(props) =>
        props.isHover &&
        `
        background-color: ${props.theme.rainbow.palette.action.hover};
        cursor: pointer;
        `}

    ${(props) =>
        props.isFocused &&
        props.isSelected &&
        `
        background-color: ${props.theme.rainbow.palette.action.hover};
        cursor: pointer;
        background-color: ${props.theme.rainbow.palette.background.highlight};
        color: ${props.theme.rainbow.palette.text.main};
        `}
`;

export const StyledName = styled.span`
    flex-grow: 1;
`;

export const StyledIconContainer = styled.a<IsSelected>`
    line-height: 12px;
    border-radius: 50%;
    padding: 0.3rem;

    :active,
    :focus {
        outline: none;
        box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
    }

    ${(props) => !props.isSelected && 'display: none;'}
`;

export const StyledCloseIcon = styled(Close)`
    width: 12px;
    height: 12px;
    color: #9199a2;
    cursor: pointer;
`;
