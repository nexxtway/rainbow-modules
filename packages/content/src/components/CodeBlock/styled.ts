import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};
`;

export const StyledLabel = styled.h3`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.875rem;
    font-weight: bold;
`;

export const StyledContent = styled.div`
    padding: 0.5rem;
    background-color: ${(props) => props.theme.rainbow.palette.background.disabled};
`;

export const StyledPre = styled.pre`
    background: none !important;
    margin: 0;
    font-size: 0.875rem;

    .linenumber {
        color: ${(props) => props.theme.rainbow.palette.text.disabled};
        font-weight: bold;
    }
`;
