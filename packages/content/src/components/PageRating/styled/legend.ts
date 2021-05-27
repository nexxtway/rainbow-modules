import styled from 'styled-components';

const StyledLegend = styled.span`
    text-transform: uppercase;
    font-family: Lato;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    margin-bottom: 8px;
`;

export default StyledLegend;
