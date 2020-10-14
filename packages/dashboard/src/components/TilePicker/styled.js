import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    ${(props) =>
        props.isCarousel &&
        `
            justify-content: space-around;
        `};
`;

export const StyledArrowButton = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    ${(props) =>
        props.disabled &&
        `
            color: ${(props) => props.theme.rainbow.palette.text.disabled};
        `};
`;
