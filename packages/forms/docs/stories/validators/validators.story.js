import React from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import { Input, Button, Textarea } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import UniversalForm from '../../../src/components/UniversalForm';
import {
    isEmail,
    isInteger,
    isRequired,
    isUrl,
    max,
    maxLength,
    min,
    minLength,
} from '../../../src/validators';

const Container = styled.div`
    max-width: 480px;
    margin: 48px auto;
`;

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 20px;
`;

const onSubmit = (values) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
};

export const IsEmail = () => {
    return (
        <RainbowFirebaseApp>
            <Container>
                <UniversalForm id="isEmail" onSubmit={onSubmit}>
                    <Field
                        name="email"
                        component={Input}
                        label="Email"
                        placeholder="Enter your email"
                        labelAlignment="left"
                        validate={isEmail()}
                        className="rainbow-m-bottom_large"
                    />
                </UniversalForm>
                <StyledButton label="Submit" type="submit" form="isEmail" variant="brand" />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const IsInteger = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="isEmail" onSubmit={onSubmit}>
                <Field
                    name="age"
                    component={Input}
                    label="Age"
                    placeholder="Enter your age"
                    labelAlignment="left"
                    validate={isInteger()}
                    className="rainbow-m-bottom_large"
                    type="number"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="isEmail" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const IsRequired = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="isRequired" onSubmit={onSubmit}>
                <Field
                    name="name"
                    component={Input}
                    label="Name"
                    placeholder="Enter your name"
                    labelAlignment="left"
                    validate={isRequired('This field is required')}
                    className="rainbow-m-bottom_large"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="isRequired" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const IsUrl = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="isUrl" onSubmit={onSubmit}>
                <Field
                    name="website"
                    component={Input}
                    label="Website"
                    placeholder="Enter your website address"
                    labelAlignment="left"
                    validate={isUrl()}
                    className="rainbow-m-bottom_large"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="isUrl" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const Max = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="max" onSubmit={onSubmit}>
                <Field
                    name="age"
                    component={Input}
                    label="Age"
                    placeholder="Enter your age"
                    labelAlignment="left"
                    validate={max(120, 'Humans can not live more than 120 years')}
                    className="rainbow-m-bottom_large"
                    type="number"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="max" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const Min = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="min" onSubmit={onSubmit}>
                <Field
                    name="age"
                    component={Input}
                    label="Age"
                    placeholder="Enter your age"
                    labelAlignment="left"
                    validate={min(0, 'The value must be a positive number')}
                    className="rainbow-m-bottom_large"
                    type="number"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="min" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const MaxLength = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="maxLength" onSubmit={onSubmit}>
                <Field
                    name="bio"
                    component={Textarea}
                    label="Bio"
                    placeholder="Describe yourself"
                    labelAlignment="left"
                    validate={maxLength(150)}
                    className="rainbow-m-bottom_large"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="maxLength" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export const MinLength = () => (
    <RainbowFirebaseApp>
        <Container>
            <UniversalForm id="minLength" onSubmit={onSubmit}>
                <Field
                    name="bio"
                    component={Textarea}
                    label="Bio"
                    placeholder="Describe yourself"
                    labelAlignment="left"
                    validate={minLength(50)}
                    className="rainbow-m-bottom_large"
                />
            </UniversalForm>
            <StyledButton label="Submit" type="submit" form="minLength" variant="brand" />
        </Container>
    </RainbowFirebaseApp>
);

export default {
    title: 'Modules/Forms/Validators/Stories',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
