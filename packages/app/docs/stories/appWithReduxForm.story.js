/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Input, Button, Textarea, Card } from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';
import RainbowFirebaseApp from '../../src/components/App';
import app from '../../../../firebase';

const ContainerCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px auto;
    width: 40%;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-size: 24px;
    margin: 8px 0 16px 0;
    text-align: center;
    color: ${(props) => props.palette.text.main};
`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 40px 16px 40px;
`;

const Content = ({ handleSubmit }) => {
    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(`submitting ${JSON.stringify(values)}`);
    };
    return (
        <ContainerCard>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Title>We had love to hear from you</Title>
                <Field
                    className="rainbow-m-bottom_medium"
                    component={Input}
                    name="name"
                    label="Name"
                    required
                    placeholder="Enter your name"
                />
                <Field
                    className="rainbow-m-bottom_medium"
                    component={Input}
                    name="email"
                    label="Email Address"
                    required
                    placeholder="Enter your email address"
                />
                <Field
                    className="rainbow-m-bottom_medium"
                    component={Textarea}
                    name="message"
                    label="Message"
                    required
                    placeholder="Type your message"
                />
                <Button
                    className="rainbow-m-bottom_medium rainbow-m-top_medium"
                    label="Send"
                    type="submit"
                    variant="brand"
                />
            </FormContainer>
        </ContainerCard>
    );
};

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'The name field is required.';
    }
    return errors;
};
const Form = reduxForm({
    validate,
    form: 'appWithReduxForm',
})(Content);

export const simpleFormValidation = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Form />
        </RainbowFirebaseApp>
    );
};
