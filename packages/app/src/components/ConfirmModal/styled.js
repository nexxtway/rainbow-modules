import styled from 'styled-components';
import RainbowButton from 'react-rainbow-components/components/Button';

export const Container = styled.div`
    display: flex;
`;

export const IconContainer = styled.div`
    margin-left: 24px;
    padding: 0;
`;

export const Question = styled.div`
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    padding: 0 1rem 0.5rem 1rem;
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
