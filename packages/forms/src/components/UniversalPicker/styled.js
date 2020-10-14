import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

export const StyledContainer = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
`;

export const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    color: ${(props) => props.palette.text.label};
    line-height: 1.5;
    margin: 0 auto 0.25rem auto;
    text-align: center;
`;

export const StyledOptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;
