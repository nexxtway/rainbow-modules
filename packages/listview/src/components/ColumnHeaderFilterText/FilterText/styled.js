import { Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import { Plus } from '@rainbow-modules/icons';

export const StyledContentField = styled.div`
    display: flex;
`;

export const StyledOr = styled.span.attrs((props) => props.theme.rainbow)`
    color: ${(props) => props.palette.text.header};
`;

export const StyledInput = styled(Input)`
    width: 100%;
`;

export const StyledButton = styled(Button)`
    margin-top: 10px;
    padding-left: 5px;
`;

export const StyledIconPlus = styled(Plus).attrs((props) => props.theme.rainbow)`
    margin-right: 10px;
    border: 1px solid;
    padding: 2px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
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
