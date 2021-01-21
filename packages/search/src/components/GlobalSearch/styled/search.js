import styled from 'styled-components';
import { Input } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const StyledInput = styled(Input)`
    input {
        padding-right: 100px;

        :focus {
            padding-right: 100px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    right: 1rem;
`;

export const StyledDivider = styled.div`
    margin: 0 5px;
    width: 1px;
    display: inline-block;
    background-color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const StyledClearButton = styled.button`
    background-color: transparent;
    border: none;

    &:hover {
        color: ${(props) => props.theme.rainbow.palette.brand.main};
    }
`;
