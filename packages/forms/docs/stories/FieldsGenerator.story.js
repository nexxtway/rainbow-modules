/* eslint-disable no-alert */
import React from 'react';
import {
    Application,
    CounterInput,
    Button,
    PhoneInput,
    Picklist,
    Option,
} from 'react-rainbow-components';
import { useReduxForm } from '@rainbow-modules/hooks';
import styled from 'styled-components';
import FieldsGenerator from '../../src/components/FieldsGenerator';
import UniversalForm from '../../src/components/UniversalForm';

const SelectInput = (props) => {
    const {
        value: { value },
        onChange,
        label,
        className,
        labelAlignment,
        options,
        required,
        error,
    } = useReduxForm(props);

    const newValue = {
        label: value,
        name: value,
    };

    const handleChange = ({ name }) => onChange({ value: name, type: 'select' });

    return (
        <Picklist
            required={required}
            error={error}
            onChange={handleChange}
            value={newValue}
            label={label}
            labelAlignment={labelAlignment}
            className={className}
        >
            {options.map((item) => (
                <Option key={item} name={item} label={item} />
            ))}
        </Picklist>
    );
};

const Form = styled(UniversalForm)`
    display: flex;
    flex-direction: column;
    margin: 80px;
`;

const StyledButton = styled(Button)`
    max-width: 100px;
    align-self: flex-end;
`;

const schema = [
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
        required: {
            errorMessage: 'The email is invalid.',
        },
        placeholder: 'Type your email',
    },
    {
        label: 'Phone',
        name: 'phone',
        type: 'phone',
        required: true,
        isValidPhone: true,
        isPhoneNumberFrom: ['ca', 'us', 'mx'],
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'select',
        options: [
            { label: '-- Select Gender --', value: '' },
            { value: 'female', label: 'Female' },
            { value: 'male', label: 'Male' },
        ],
    },
    {
        label: 'My custom select',
        name: 'myCustomSelect',
        type: 'customSelect',
        props: {
            options: ['option1', 'option2', 'option3'],
        },
    },
    {
        label: 'Amount',
        name: 'amount',
        type: 'number',
        min: {
            value: 0,
            errorMessage: "Value can't be less than 0",
        },
        max: 10,
    },
    {
        label: 'Notes',
        name: 'notes',
        type: 'textarea',
        minLength: 10,
        maxLength: 100,
    },
    {
        label: 'Active',
        name: 'avtive',
        type: 'boolean',
        default: true,
    },
];

const types = {
    number: {
        component: CounterInput,
    },
    phone: {
        component: PhoneInput,
    },
    customSelect: {
        component: SelectInput,
    },
};

const validations = {
    isValidPhone: (value) => {
        const number = value ? `${value.countryCode}${value.phone}` : '';
        const result = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(number);
        if (result) {
            return undefined;
        }
        return 'The phone number entered is invalid';
    },
    isPhoneNumberFrom: (value, allValues, fieldState, keywordSchema) => {
        const result = keywordSchema.some((isoCode) => value.isoCode.includes(isoCode));
        if (result) {
            return undefined;
        }
        return 'The phone number entered must be from Canada, USA or Mexico';
    },
};

export const Basic = () => {
    return (
        <Application>
            <Form onSubmit={(values) => alert(JSON.stringify(values))}>
                <FieldsGenerator
                    schema={schema}
                    types={types}
                    validations={validations}
                    labelAlignment="left"
                />
                <StyledButton label="Submit" type="submit" />
            </Form>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/FieldsGenerator',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
