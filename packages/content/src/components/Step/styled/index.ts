import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
`;

export const StyledNumber = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    color: ${(props) => props.theme.rainbow.palette.background.main};
    background-color: ${(props) => props.theme.rainbow.palette.border.main};
`;

export const StyledStepContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1em;
`;

export const StyledHeader = styled.h1`
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    min-height: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const StyledDescription = styled.span`
    margin-bottom: 1em;
`;
