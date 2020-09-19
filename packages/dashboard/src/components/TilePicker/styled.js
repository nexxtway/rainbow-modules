import styled from 'styled-components';

export const StyledContainer = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    display: inline-flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const StyledLabel = styled.legend`
    border: 0;
    padding: 0;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0 5px 5px 5px;
`;

export const StyledOptionsContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
`;
