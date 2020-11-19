import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
    margin-bottom: 20px;
`;

export const Label = styled.h2`
    font-size: 20px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

export const ActionsContainer = styled.div`
    padding-left: 8px;
`;
