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
    color: #081832;
    padding: 0.3rem;
`;

export const StyledOption = styled.div.attrs((props) => props.theme.rainbow)<StyledOptionProps>`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.6rem;
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color; transparent;
    cursor: pointer;
    
    :focus,
    :active {
        outline: none;
    }

    ${(props) =>
        props.isSelected &&
        `
        font-weight: bold;
        background-color: #e3e5ed;
        cursor: default;
        `}

    ${(props) =>
        props.isHover &&
        `
        background-color: #e3e5ed;
        `}

    ${(props) =>
        props.isFocused &&
        `
        box-shadow: ${props.shadows.brand};
        `}
`;

export const StyledName = styled.span`
    flex-grow: 1;
`;

export const StyledIconContainer = styled.a.attrs((props) => props.theme.rainbow)<IsSelected>`
    line-height: 12px;
    border-radius: 50%;
    padding: 0.3rem;

    :active,
    :focus {
        outline: none;
        box-shadow: ${(props) => props.shadows.brand};
    }

    ${(props) => !props.isSelected && 'display: none;'}
`;

export const StyledCloseIcon = styled(Close)`
    width: 12px;
    height: 12px;
    color: #9199a2;
    cursor: pointer;
`;
