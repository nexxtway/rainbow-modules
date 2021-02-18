import styled from 'styled-components';

export const StyledContainer = styled.div.attrs((props) => props.theme.rainbow)`
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    box-shadow: ${(props) => props.shadows.shadow_2};
    border-radius: 0.875rem;
    outline: none;
`;

export const StyledContent = styled.div`
    padding: 1rem;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
`;

export const StyledFooter = styled.div.attrs((props) => props.theme.rainbow)`
    border-top: 0.0625px solid ${(props) => props.palette.border.divider};
    padding: 0.75rem 1rem;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
`;
