/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, RenderIf } from 'react-rainbow-components';
import { Trash, Plus } from '@rainbow-modules/icons';
import { useReduxForm } from '@rainbow-modules/hooks';
import {
    Container,
    ErrorText,
    Fieldset,
    Label,
    StyledInput,
    StyledPhoneInput,
    StyledButtonIcon,
} from './styled';
import { InputConfig, PhoneNumber, RowError } from './types';

interface MultiPhoneNumberInputProps {
    label: string;
    value?: Array<[PhoneNumber, string]>;
    onChange?: (value: Array<[PhoneNumber, string]>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    error?: string | Record<number, RowError>;
    maxPhoneNumbers?: number;
    onAddPhoneNumber?: (index: number) => [InputConfig, InputConfig];
}

const MultiPhoneNumberInput: React.FC<MultiPhoneNumberInputProps> = (props) => {
    const {
        label,
        value: valueInProps,
        error,
        onAddPhoneNumber,
        maxPhoneNumbers = 5,
        onChange = () => {},
    } = useReduxForm(props);
    const value: Array<[PhoneNumber, string]> = Array.isArray(valueInProps)
        ? valueInProps
        : [[{ isoCode: 'us', phone: '', countryCode: '+1' }, '']];

    const updatePhone = (index: number, phoneValue: PhoneNumber) => {
        value[index][0] = phoneValue;
        onChange([...value]);
    };

    const updateNote = (index: number, noteValue: string) => {
        value[index][1] = noteValue;
        onChange([...value]);
    };

    const addPhoneNumber = () => {
        onChange([...value, [{ isoCode: 'us', phone: '', countryCode: '+1' }, '']]);
    };

    const removePhoneNumber = (index: number) => {
        onChange(value.slice(0, index).concat(value.slice(index + 1, value.length)));
    };

    const phoneNumbers = value.map(([phone, note], index: number) => {
        const isFirst = index === 0;
        const inputConfig = onAddPhoneNumber
            ? onAddPhoneNumber(index)
            : [{ label: isFirst ? 'Primary' : 'Secondary' }, { label: 'Note' }];

        const rowError = !error || typeof error === 'string' ? null : (error[index] as RowError);
        const phoneError = rowError && rowError.phone;
        const noteError = rowError && rowError.note;

        return (
            <Fieldset>
                <StyledPhoneInput
                    label={inputConfig[0].label}
                    onChange={(phoneValue) => updatePhone(index, phoneValue)}
                    value={phone}
                    error={phoneError}
                />
                <StyledInput
                    label={inputConfig[1].label}
                    onChange={(event) => updateNote(index, event.target.value)}
                    value={note}
                    error={noteError}
                />
                <RenderIf isTrue={!isFirst}>
                    <StyledButtonIcon
                        icon={<Trash />}
                        onClick={() => removePhoneNumber(index)}
                        variant="border-filled"
                    />
                </RenderIf>
            </Fieldset>
        );
    });

    return (
        <Container>
            <Label>{label}</Label>
            {phoneNumbers}
            <RenderIf isTrue={typeof error === 'string'}>
                <ErrorText>{error}</ErrorText>
            </RenderIf>
            <RenderIf isTrue={value.length < maxPhoneNumbers}>
                <Button variant="base" onClick={addPhoneNumber}>
                    <Plus className="rainbow-m-right_small" />
                    Add Another Phone Number
                </Button>
            </RenderIf>
        </Container>
    );
};

MultiPhoneNumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onAddPhoneNumber: PropTypes.func,
    maxPhoneNumbers: PropTypes.number,
    onChange: PropTypes.func,
};

MultiPhoneNumberInput.defaultProps = {
    value: [[{ isoCode: 'us', phone: '', countryCode: '+1' }, '']],
    onAddPhoneNumber: undefined,
    maxPhoneNumbers: 5,
    onChange: () => {},
};

export default MultiPhoneNumberInput;
