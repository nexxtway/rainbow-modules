import { Button, Input, Picklist } from 'react-rainbow-components';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 1rem;
    border-radius: 0.875rem;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
`;

export const StyledHeader = styled.h1`
    font-size: 1.6em;
`;

export const StyledFilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLabel = styled.span`
    width: 50px;
`;

export const StyledPicklist = styled(Picklist)`
    margin: 0.4rem;
`;

export const StyledInput = styled(Input)`
    margin: 0.4rem;
`;

export const StyledButtonsContainer = styled.div`
    display: flex;
    flex-direction-row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
`;

export const StyledAddButton = styled(Button)`
    margin-right: auto;
`;

export const StyledButton = styled(Button)`
    margin: 0 0 0 1rem;
`;
