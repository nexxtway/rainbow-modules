import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const Label = styled.h2`
    font-size: 20px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

export const ActionsContainer = styled.div`
    padding-left: 8px;
`;

export const Body = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
`;
