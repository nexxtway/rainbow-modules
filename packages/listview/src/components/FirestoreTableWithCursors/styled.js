import styled from 'styled-components';
import { Table } from 'react-rainbow-components';

export const Container = styled.div`
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

export const StyledTable = styled(Table)`
    overflow: auto;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 12px 12px 0 12px;
`;
