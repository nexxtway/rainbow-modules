import styled from 'styled-components';
import { Button as RainbowButton } from 'react-rainbow-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
`;

export const IconContainer = styled.div`
    margin: 1.32rem 0 1rem 1rem;
`;

export const Header = styled.div`
    font-family: Lato;
    font-size: 22px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    color: ${(props) => props.theme.rainbow.palette.text.title};
    padding: 2rem 2rem 1rem 1rem;
`;

export const Question = styled.div`
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    padding: 0 2rem 0.5rem 1rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 4px 0 0 0;
`;

export const Button = styled(RainbowButton)`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: 0.7rem;
`;
