import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: ${(props) => props.textTransform};
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
`;
