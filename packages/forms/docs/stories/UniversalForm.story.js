import React, { useState } from 'react';
import { Field, FormSpy } from 'react-final-form';
import {
    Input,
    Button,
    PhoneInput,
    DatePicker,
    RadioGroup,
    Select,
    RenderIf,
} from 'react-rainbow-components';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import UniversalForm from '../../src/components/UniversalForm';

// validations
import compose from '../../src/helpers/composeValidators';
import isRequired from '../../src/validators/isRequired';
import isEmail from '../../src/validators/isEmail';

const genders = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'custom', label: 'Custom' },
];

const options = [
    { value: 'placeholder', label: 'Select your Pronoun', disabled: true },
    { value: 'she', label: 'She: Wish her a happy birthday!' },
    { value: 'he', label: 'He: Wish him a happy birthday!' },
    { value: 'they', label: 'They: Wish them a happy birthday!' },
];

const Container = styled.div`
    max-width: 480px;
    margin: 48px auto;
`;

const Header = styled.header`
    padding: 12px 0;
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
    margin-bottom: 36px;
`;

const Title = styled.h1`
    font-size: 20px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
`;

const Description = styled.h2`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.label};
`;

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const StyledInput = styled(Input)`
    width: 48%;
`;

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 20px;
`;

export const Basic = () => {
    const [gender, setGender] = useState(undefined);
    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    };
    return (
        <RainbowFirebaseApp>
            <Container>
                <UniversalForm id="basic" onSubmit={onSubmit}>
                    <Header>
                        <Title>Sign Up</Title>
                        <Description>It’s quick and easy.</Description>
                    </Header>
                    <Row className="rainbow-m-bottom_large">
                        <Field
                            name="first-name"
                            component={StyledInput}
                            label="First Name"
                            placeholder="Enter your first name"
                            required
                            labelAlignment="left"
                            validate={compose(isRequired())}
                        />
                        <Field
                            name="last-name"
                            component={StyledInput}
                            label="Last Name"
                            placeholder="Enter your last name"
                            required
                            labelAlignment="left"
                            validate={compose(isRequired())}
                        />
                    </Row>
                    <Field
                        name="phone-number"
                        component={PhoneInput}
                        label="Last Name"
                        placeholder="Enter your phone number"
                        required
                        labelAlignment="left"
                        validate={compose(isRequired())}
                        className="rainbow-m-bottom_large"
                    />
                    <Field
                        name="email"
                        component={Input}
                        label="Email"
                        placeholder="Enter your email"
                        required
                        labelAlignment="left"
                        validate={compose(isRequired(), isEmail())}
                        className="rainbow-m-bottom_large"
                    />
                    <Field
                        name="date"
                        component={DatePicker}
                        label="Birthday"
                        placeholder="Enter your Birthday"
                        required
                        labelAlignment="left"
                        validate={compose(isRequired())}
                        className="rainbow-m-bottom_large"
                    />
                    <Field
                        name="gender"
                        component={RadioGroup}
                        label="Gender"
                        required
                        orientation="horizontal"
                        options={genders}
                        validate={compose(isRequired())}
                        className="rainbow-m-bottom_large"
                    />
                    <FormSpy onChange={({ values }) => setGender(values.gender)} />
                    <RenderIf isTrue={gender === 'custom'}>
                        <Field
                            name="pronoun"
                            component={Select}
                            label="Pronoun"
                            required
                            labelAlignment="left"
                            validate={compose(isRequired())}
                            options={options}
                            className="rainbow-m-bottom_large"
                        />
                    </RenderIf>
                </UniversalForm>
                <StyledButton label="Sign Up" type="submit" form="basic" variant="brand" />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Forms/Stories/UniversalFrom',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
