import styled from 'styled-components';
import { Button, ButtonIcon, Input } from 'react-rainbow-components';
import { Plus } from '@rainbow-modules/icons';

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

export const StyledSortArrowIcon = styled.svg`
    flex-shrink: 0;
    visibility: hidden;
    margin-left: 12px;
    ${(props) =>
        props.arrowAscendent &&
        `
            transform: rotate(-180deg);
        `};
    ${(props) =>
        props.headerAlignment === 'right' &&
        `
        margin-left: 0;
        margin-right: 12px;
    `}
`;

export const StyledContentField = styled.div`
    display: flex;
`;

export const StyledOr = styled.span.attrs((props) => props.theme.rainbow)`
    color: ${(props) => props.palette.text.header};
`;

export const StyledButtonIcon = styled(ButtonIcon).attrs((props) => props.theme.rainbow)`
    :after {
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

export const StyledButton = styled(Button)`
    margin-top: 10px;
    padding-left: 5px;
`;

export const StyledIconPlus = styled(Plus).attrs((props) => props.theme.rainbow)`
    margin-right: 10px;
    border: 1px solid;
    padding: 2px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;

export const StyledInput = styled(Input)`
    width: 100%;
`;
