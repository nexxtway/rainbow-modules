import styled from 'styled-components';
import { Option } from 'react-rainbow-components';
import darken from 'react-rainbow-components/styles/helpers/color/darken';
import InternalDropdown from 'react-rainbow-components/components/InternalDropdown';
import CheckmarkIcon from './checkmark';

// eslint-disable-next-line import/prefer-default-export
export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: ${(props) => props.textTransform};
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    ${(props) => props.isEditable && `cursor: pointer`}

    ${(props) =>
        props.isOpen &&
        `
        background: ${darken(props.backgroundColor)};
        font-weight: bold;
        `}
`;

export const StyledIndicator = styled.span`
    height: 100%;
    right: 1.2rem;
    position: absolute;
    line-height: 1;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 45%;
        pointer-events: none;
        width: 0.45rem;
        height: 0.45rem;
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        transform: rotate(135deg);
        color: ${(props) => props.color};
        box-sizing: border-box;
    }
`;

export const StyledCheckmark = styled(CheckmarkIcon)`
    position: absolute;
    right: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 1;
    margin-left: 0.75rem;
    flex-shrink: 0;
    color: ${(props) => props.color};
`;

export const StyledDropdown = styled(InternalDropdown)`
    min-width: 18rem;
`;

export const StyledOption = styled(Option)`
    > [role='option'] {
        background-color: transparent;
    }
`;

export const StyledColoredOption = styled.div`
    position: relative;
    width: 100%;
    height: 42px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    margin: 1px 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: ${(props) => props.textTransform};
`;

export const StyledHeader = styled.h3`
    font-size: 1.25rem;
    padding: 0 0.75rem 0.75rem 0.75rem;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;
