/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentType, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, RenderIf } from 'react-rainbow-components';
import { Close, Plus } from '@rainbow-modules/icons';
import { useReduxForm } from '@rainbow-modules/hooks';
import {
    Container,
    ErrorText,
    Fieldset,
    Label,
    StyledInput,
    StyledNoteInput,
    StyledButtonIcon,
} from './styled';
import { InputConfig, RowError } from './types';

interface InputProps<T> {
    label?: ReactNode;
    error?: ReactNode;
    value?: T;
    onChange?: (value: any) => void;
}

interface MultiInputProps<T> {
    label: string;
    component?: ComponentType<InputProps<T>>;
    value?: Array<[T | undefined, string | undefined]>;
    onChange?: (value: Array<[T | undefined, string | undefined]>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    error?: string | Record<number, RowError>;
    max?: number;
    onAdd?: (index: number) => [InputConfig, InputConfig] | [InputConfig];
}

function MultiInput<T>(props: MultiInputProps<T>): JSX.Element {
    const {
        label,
        value: valueInProps,
        error,
        onAdd,
        max = 5,
        component,
        onChange = () => {},
    } = useReduxForm(props);
    const Component = component || Input;
    const value: Array<[T | undefined, string | undefined]> = Array.isArray(valueInProps)
        ? valueInProps
        : [[undefined, undefined]];

    const updatePhone = (index: number, newValue: any) => {
        if (newValue?.target?.value) {
            value[index][0] = newValue?.target?.value as T;
        } else {
            value[index][0] = newValue as T;
        }
        onChange([...value]);
    };

    const updateNote = (index: number, noteValue: string) => {
        value[index][1] = noteValue;
        onChange([...value]);
    };

    const addInput = () => {
        onChange([...value, [undefined, undefined]]);
    };

    const removeInput = (index: number) => {
        onChange(value.slice(0, index).concat(value.slice(index + 1, value.length)));
    };

    const inputs = value.map(([inputValue, note], index: number) => {
        const isFirst = index === 0;
        const inputConfig = onAdd
            ? onAdd(index)
            : [{ label: isFirst ? 'Primary' : 'Secondary' }, { label: 'Note' }];

        const rowError = !error || typeof error === 'string' ? null : (error[index] as RowError);
        const phoneError = rowError && rowError.value;
        const noteError = rowError && rowError.note;
        const showNote = inputConfig[1];

        return (
            // eslint-disable-next-line react/no-array-index-key
            <Fieldset key={`value-${index}`} data-key={`value-${index}`}>
                <StyledInput
                    as={Component}
                    label={inputConfig[0].label}
                    onChange={(newValue: any) => updatePhone(index, newValue)}
                    value={inputValue}
                    error={phoneError}
                />
                {showNote && (
                    <StyledNoteInput
                        label={inputConfig[1]?.label}
                        onChange={(event) => updateNote(index, event.target.value)}
                        value={note}
                        error={noteError}
                    />
                )}
                <RenderIf isTrue={!isFirst}>
                    <StyledButtonIcon
                        icon={<Close />}
                        onClick={() => removeInput(index)}
                        variant="border-filled"
                    />
                </RenderIf>
            </Fieldset>
        );
    });

    return (
        <Container>
            <Label>{label}</Label>
            {inputs}
            <RenderIf isTrue={typeof error === 'string'}>
                <ErrorText>{error}</ErrorText>
            </RenderIf>
            <RenderIf isTrue={value.length < max}>
                <Button variant="base" onClick={addInput}>
                    <Plus className="rainbow-m-right_small" />
                    Add Another Input
                </Button>
            </RenderIf>
        </Container>
    );
}

MultiInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onAdd: PropTypes.func,
    max: PropTypes.number,
    onChange: PropTypes.func,
};

MultiInput.defaultProps = {
    value: undefined,
    onAdd: undefined,
    component: undefined,
    max: 5,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    error: undefined,
};

export default MultiInput;
