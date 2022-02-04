import styled from 'styled-components';

const StyledFooter = styled.div.attrs((props) => props.theme.rainbow)`
    border-top: 0.0625px solid ${(props) => props.palette.border.divider};
    padding: 0.75rem 1rem;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
`;

export default StyledFooter;
