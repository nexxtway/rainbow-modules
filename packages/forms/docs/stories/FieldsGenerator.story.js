import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Application, Input, CounterInput, Button, PhoneInput } from 'react-rainbow-components';
import styled from 'styled-components';
import FieldsGenerator from '../../src/components/FieldsGenerator';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled(Button)`
    max-width: 100px;
    align-self: flex-end;
`;

const fieldsSchema = [
    {
        label: 'First Name',
        name: 'firstName',
        type: 'text',
        required: true,
        placeholder: 'Type your first name',
    },
    {
        label: 'Last Name',
        name: 'lastName',
        type: 'text',
        required: true,
        placeholder: 'Type your last name',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        placeholder: 'Type your email',
    },
    {
        label: 'Phone',
        name: 'phone',
        type: 'phone',
    },
    {
        label: 'Amount',
        name: 'amount',
        type: 'number',
    },
];

const types = {
    number: {
        component: CounterInput,
    },
    text: {
        component: Input,
    },
    phone: {
        component: PhoneInput,
    },
};

const validate = (values) => {
    const { firstName, lastName, email } = values;
    const errors = {};
    if (!firstName) {
        errors.firstName = 'Looks like you forget to add your first name';
    }
    if (!lastName) {
        errors.lastName = 'Looks like you forget to add your last name';
    }
    if (!email) {
        errors.email = 'Looks like you forget to add your email';
    }

    return errors;
};

export const Basic = () => {
    return (
        <Application>
            <FinalForm onSubmit={(values) => alert(JSON.stringify(values))} validate={validate}>
                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} noValidate>
                            <FieldsGenerator fieldsSchema={fieldsSchema} types={types} />
                            <StyledButton label="Submit" type="submit" />
                        </Form>
                    );
                }}
            </FinalForm>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/FieldsGenerator',
};
