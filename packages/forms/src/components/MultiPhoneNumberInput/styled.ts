/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PhoneInput, Input } from 'react-rainbow-components';
import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label``;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const StyledPhoneInput = styled(PhoneInput)`
    width: calc(70% - 7.5px);
`;

export const StyledInput = styled(Input)`
    width: calc(30% - 7.5px);
`;

export const StyledOtherNoteInput = styled(Input)`
    width: calc(30% - 55px);
`;

export const ErrorText = styled.div`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    align-self: start;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
