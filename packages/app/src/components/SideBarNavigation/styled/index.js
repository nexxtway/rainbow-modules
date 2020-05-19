import styled from 'styled-components';

const StyledContainer = styled.div.attrs((props) => {
    return props.theme.rainbow.palette;
})`
    background: ${(props) => props.background.main};
    width: 88px;
    height: 100%;
    margin: 16px;
    border-radius: 16px;
    color: ${(props) => props.brand.main};
`;

export default StyledContainer;
