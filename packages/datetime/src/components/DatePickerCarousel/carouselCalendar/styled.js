import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const StyledSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

export const StyledArrowButton = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    ${(props) =>
        props.disabled &&
        `
            color: ${(props) => props.theme.rainbow.palette.text.disabled};
        `};
`;

export const StyledCarouselContent = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    height: 85px;
`;

export const StyledDayCard = styled.button`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px auto 8px;
    border: 1px solid transparent;
    border-radius: 18px;
    background: #eceff4;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    min-width: 57px;
    max-width: 57px;
    width: 57px;
    height: 68px;
    padding: 0;
    appearance: button;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;

    &:focus {
        box-shadow: 0 0 2px ${(props) => props.theme.rainbow.palette.brand.main};
    }

    ${(props) =>
        props.isSelected &&
        `
        height: 72px;
        color: white;
        background: ${props.theme.rainbow.palette.brand.main};
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

        &:focus {
            box-shadow: 0 2px 8px 0 ${props.theme.rainbow.palette.brand.dark};
        }
        `};

    ${(props) =>
        !props.isSelected &&
        `
        &:hover {
            border: 1px solid ${props.theme.rainbow.palette.brand.dark};
        }
        `};
`;

export const StyledDisabledDayCard = styled.div`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px auto 8px;
    border: 1px solid transparent;
    border-radius: 18px;
    background: ${(props) => props.theme.rainbow.palette.background.disabled};
    color: ${(props) => props.theme.rainbow.palette.text.disabled};
    min-width: 57px;
    max-width: 57px;
    width: 57px;
    height: 68px;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
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
