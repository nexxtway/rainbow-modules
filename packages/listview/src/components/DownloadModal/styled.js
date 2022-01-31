import styled from 'styled-components';
import { Input } from 'react-rainbow-components';

export const Title = styled.h1`
    font-size: 25px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

export const Description = styled.p`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    font-size: 14px;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    border: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
    font-size: 18px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

export const StyledInput = styled(Input)`
    width: 137px;
`;
