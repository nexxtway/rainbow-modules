import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ErrorText = styled.p`
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-size: 16px;
    background-color: #e7e8ed;
    width: 80%;
    padding: 30px;
    border-radius: 0.9rem;
    margin-top: 10px;
`;

export const Title = styled.h3`
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-size: 20px;
    margin-top: 10px;
`;

export const SecondTitle = styled.p`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    font-size: 12px;
    margin-bottom: 10px;
`;
