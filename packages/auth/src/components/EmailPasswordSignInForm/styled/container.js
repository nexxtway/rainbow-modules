import styled from 'styled-components';

const StyledContainer = styled.form`
    display: flex;
    flex-direction: column;

    & > * {
        margin: 0.8rem 0;
    }
`;

export default StyledContainer;
