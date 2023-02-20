/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PhoneInput, Input } from 'react-rainbow-components';
import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label`
    font-size: 18px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    margin-bottom: 4px;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
    margin-bottom: 16px;
`;

export const StyledPhoneInput = styled(PhoneInput)`
    min-width: 75%;
`;

export const StyledInput = styled(Input)`
    flex-grow: 1;
`;

export const ErrorText = styled.div`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    align-self: start;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
