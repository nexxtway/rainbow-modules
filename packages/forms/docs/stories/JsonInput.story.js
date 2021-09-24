import React, { useState } from 'react';
import styled from 'styled-components';
import { Application, Button } from 'react-rainbow-components';
import { Field } from 'react-final-form';
import { UniversalForm } from '@rainbow-modules/forms';
import JsonInput from '../../src/components/JsonInput';

const StyledContainer = styled.div`
    width: 450px;
    height: 400px;
`;

const StyledButton = styled(Button)`
    margin-top: 1rem;
`;

const initialValue = {
    key: 'value',
    boolean: true,
    number: 15,
    array: [1, 2, 3],
    obj: {
        child_key: 10,
    },
    array_with_object: [
        {
            key: 'value',
        },
    ],
    object_with_array: {
        array: [1, 2, 3],
        other_key: 1,
    },
    null: null,
};

export const BasicJsonInput = () => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (value) => {
        setValue(value);
    };
    return (
        <Application>
            <StyledContainer>
                <JsonInput label="JSON Input" value={value} onChange={handleChange} />
            </StyledContainer>
        </Application>
    );
};

export const ErrorJsonInput = () => {
    return (
        <Application>
            <StyledContainer>
                <JsonInput label="JSON Input" value={initialValue} error="Invalid JSON" />
            </StyledContainer>
        </Application>
    );
};

export const ReadonlyJsonInput = () => {
    return (
        <Application>
            <StyledContainer>
                <JsonInput label="JSON Input" value={initialValue} readOnly />
            </StyledContainer>
        </Application>
    );
};

export const DisabledJsonInput = () => {
    return (
        <Application>
            <StyledContainer>
                <JsonInput label="JSON Input" value={initialValue} disabled />
            </StyledContainer>
        </Application>
    );
};

export const FormJsonInput = () => {
    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    };
    return (
        <Application>
            <UniversalForm id="json" onSubmit={onSubmit}>
                <Field
                    name="code"
                    component={JsonInput}
                    label="JSON Input"
                    value={{}}
                    required
                    labelAlignment="left"
                />
                <StyledButton label="Submit" type="submit" form="json" variant="brand" />
            </UniversalForm>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/JsonInput',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
