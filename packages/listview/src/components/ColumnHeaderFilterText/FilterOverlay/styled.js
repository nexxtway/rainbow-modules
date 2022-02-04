import styled from 'styled-components';

export const StyledContainer = styled.div.attrs((props) => props.theme.rainbow)`
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    box-shadow: ${(props) => props.shadows.shadow_2};
    border-radius: 0.875rem;
    outline: none;
    width: 280px;
`;

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1rem 1rem 0 1rem;
    box-sizing: border-box;
`;

export const StyledTitle = styled.h2.attrs((props) => props.theme.rainbow)`
    font-size: 1rem;
    color: ${(props) => props.palette.text.title};
`;

export const StyledTitleName = styled.span`
    font-weight: bold;
`;
