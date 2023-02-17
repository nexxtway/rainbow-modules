/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonIcon, RenderIf } from 'react-rainbow-components';
import { Trash } from '@rainbow-modules/icons';
import { Container, Fieldset, Label, StyledInput, StyledPhoneInput } from './styled';
import { InputConfig, PhoneNumber } from './types';

interface MultiPhoneNumberInputProps {
    label: string;
    value?: Array<[PhoneNumber, string]>;
    onChange?: (value: Array<[PhoneNumber, string]>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    error?: string;
    maxPhoneNumbers?: number;
    onAddPhoneNumber?: (index: number) => [InputConfig, InputConfig];
}

const MultiPhoneNumberInput: React.FC<MultiPhoneNumberInputProps> = (props) => {
    const {
        label,
        value = [[{ isoCode: 'us', phone: '', countryCode: '+1' }, '']],
        onAddPhoneNumber,
        maxPhoneNumbers = 5,
        onChange = () => {},
    } = props;

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
        return (
            <Fieldset>
                <StyledPhoneInput
                    label={inputConfig[0].label}
                    onChange={(phoneValue) => updatePhone(index, phoneValue)}
                    value={phone}
                />
                <StyledInput
                    label={inputConfig[1].label}
                    onChange={(event) => updateNote(index, event.target.value)}
                    value={note}
                />
                <RenderIf isTrue={!isFirst}>
                    <ButtonIcon icon={<Trash />} onClick={() => removePhoneNumber(index)} />
                </RenderIf>
            </Fieldset>
        );
    });

    return (
        <Container>
            <Label>{label}</Label>
            {phoneNumbers}
            <RenderIf isTrue={value.length < maxPhoneNumbers}>
                <Button label="Add" onClick={addPhoneNumber} />
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
