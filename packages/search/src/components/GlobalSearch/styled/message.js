import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 18px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-weight: 900;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
`;
