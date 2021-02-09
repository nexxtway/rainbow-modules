import styled from 'styled-components';

export const StyledFilterLabel = styled.span`
    margin-left: 0.5rem;
`;

export const StyledCircleFilledIcon = styled.span`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: ${(props) => props.theme.rainbow.palette.error.main};
`;
