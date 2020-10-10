import styled from 'styled-components';
import HiddenElement from 'react-rainbow-components/components/Structural/hiddenElement';

export const StyledContainer = styled.span`
    margin: 0 0.25rem 0.5rem 0.25rem;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
`;

export const StyledInput = styled(HiddenElement)`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;
`;
