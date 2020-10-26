import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const StyledSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

export const StyledArrowButton = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.text.header};
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
    overflow: hidden;
    height: 85px;
`;

export const StyledDayCard = styled.button`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px ${(props) => props.cardMargin}px 8px;
    border: 1px solid transparent;
    border-radius: 18px;
    background: ${(props) => props.theme.rainbow.palette.background.main};
    color: ${(props) => props.theme.rainbow.palette.text.label};
    min-width: 60px;
    max-width: 60px;
    width: 60px;
    height: 68px;
    padding: 0;
    appearance: button;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};

    &:focus {
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
        color: ${(props) => props.theme.rainbow.palette.text.label};
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    &:hover {
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
        color: ${(props) => props.theme.rainbow.palette.text.main};
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    ${(props) =>
        props.isSelected &&
        `
        height: 72px;
        color: ${props.theme.rainbow.palette.background.main};
        background: ${props.theme.rainbow.palette.brand.main};
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

        &:focus {
            box-shadow: 0 2px 8px 0 ${props.theme.rainbow.palette.brand.dark};
            color: ${props.theme.rainbow.palette.background.main};
            transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

            &:hover {
                box-shadow: 0 2px 8px 0 ${props.theme.rainbow.palette.brand.dark};
            }
        }

        &:hover {
            color: ${props.theme.rainbow.palette.background.main};
            background: ${props.theme.rainbow.palette.brand.main};
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
            transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }
    `};
`;

export const StyledDisabledDayCard = styled.div`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px ${(props) => props.cardMargin}px 8px;
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
    letter-spacing: 0.29px;
    text-align: center;
    color: inherit;
    ${(props) =>
        props.isSelected &&
        `
        font-size: 14px;
        font-weight: 700;
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
        `};
`;
