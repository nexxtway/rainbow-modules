import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    line-height: 1.5;
`;

export const Value = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 1.5;
`;
