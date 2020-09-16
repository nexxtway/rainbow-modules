import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Lato;
`;

export const StyledLabelContainer = styled.div`
    padding: 0.5rem 1.5rem;
`;

export const StyledLabel = styled.button`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    border: 0px;
    border-radius: 18px;
    background: transparent;

    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
    background: transparent;
    background-clip: border-box;
    text-decoration: none;
    color: ${(props) => props.theme.rainbow.palette.brand.main};
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
    }

    ::-moz-focus-inner,
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
        color: ${(props) => props.theme.rainbow.palette.brand.dark};
    }

    &:focus {
        outline: 0;
        box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
    }

    &:active {
        color: ${(props) => props.theme.rainbow.palette.brand.dark};
        transition: all 0.2s ease;
    }
`;

export const StyledInput = styled.input``;

export const StyledArrowButton = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    ${(props) =>
        props.disabled &&
        `
            color: ${(props) => props.theme.rainbow.palette.text.disabled};
        `};
`;

export const StyledCarouselContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

export const StyledCarouselContent = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const StyledDayCard = styled.button`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    min-width: 57px;
    width: 57px;
    height: 72px;
    margin: 5px ${(props) => props.cardMargin}px 10px;
    border: none;
    border-radius: 18px;
    background: #eceff4;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    ${(props) =>
        props.isSelected &&
        `
        color: white;
        background: ${props.theme.rainbow.palette.brand.main};
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
        `};
`;

export const StyledDayCardDayLabel = styled.span`
    font-size: 12px;
    text-transform: capitalize;
    font-weight: normal;
    letter-spacing: 0.25px;
    text-align: center;
    color: inherit;
    ${(props) =>
        props.isSelected &&
        `
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.29px;
        `};
`;

export const StyledDayCardDateLabel = styled.span`
    font-size: 22px;
    font-weight: normal;
    letter-spacing: 0.46px;
    text-align: center;
    color: inherit;
    ${(props) =>
        props.isSelected &&
        `
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 0.5px;
        `};
`;
