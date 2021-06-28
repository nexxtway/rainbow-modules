import styled from 'styled-components';
import { Input, ButtonIcon } from 'react-rainbow-components';

export const StyledContainer = styled.div`
    position: relative;
`;

export const StyledInput = styled(Input)<{ paddingRight?: string }>`
    && input {
        padding-right: ${(props) => props.paddingRight};
    }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.text.header};
`;

export const StyledTrailing = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding-right: 1rem;
    color: ${(props) => props.theme.rainbow.palette.text.header};

    > svg {
        height: 25%;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 50%;
    margin: 0 0.5rem 0 0.15rem;
    background-color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const StyledTrailingMessage = styled.span`
    display: inline-flex;
`;
