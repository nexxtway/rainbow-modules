import React from 'react';
import { Field } from 'react-final-form';
import { Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import UniversalForm from '../../src/components/UniversalForm';
import compose from '../../src/helpers/composeValidators';

const isRequired = (value) => {
    return value ? undefined : 'Required.';
};
const minLength = (num) => (value) =>
    value.length >= num ? undefined : `Min length must be ${num}.`;

const Container = styled.div`
    max-width: 860px;
`;

export const UniversalFormBasic = () => {
    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    };
    return (
        <Container>
            <UniversalForm id="basic" onSubmit={onSubmit}>
                <Field
                    name="name"
                    component={Input}
                    label="Name"
                    validate={compose(isRequired, minLength(3))}
                />
            </UniversalForm>
            <Button label="Submit" type="submit" form="basic" />
        </Container>
    );
};

export default {
    title: 'Modules|Forms/Stories/UniversalFrom',
};
