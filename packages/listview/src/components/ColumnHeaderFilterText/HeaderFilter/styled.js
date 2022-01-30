import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 3px;
`;

export const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: flex;
    align-items: center;
    height: 44px;
    width: 100%;
    padding: 0 0.5rem;
    ${(props) =>
        props.theme.variant === 'listview' &&
        `
            justify-content: center;
            text-transform: capitalize;
        `};
    ${(props) => props.headerAlignment === 'left' && 'justify-content: left;'}
    ${(props) => props.headerAlignment === 'center' && 'justify-content: center;'}
    ${(props) =>
        props.headerAlignment === 'right' &&
        `
        flex-direction: row-reverse;
        justify-content: flex-start;
    `}
`;

export const StyledContent = styled.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const StyledButtonIcon = styled(ButtonIcon).attrs((props) => props.theme.rainbow)`
    ::after {
        display: ${(props) => (props.hasFilter ? 'inline-block' : 'none')};
        position: absolute;
        top: 12px;
        right: 9px;
        background-color: ${(props) => props.palette.error.main};
        border-radius: 50%;
        content: '';
        height: 7px;
        width: 7px;
    }
`;
