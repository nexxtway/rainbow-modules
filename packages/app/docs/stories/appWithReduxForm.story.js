/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Button } from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';
import RainbowFirebaseApp from '../../src/components/App';
import app from '../../../../firebase';

const stories = storiesOf('App/Stories/ReduxForm', module);

const Content = ({ handleSubmit }) => {
    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(`submitting ${JSON.stringify(values)}`);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field component={Input} name="name" />
            <Button label="Submit" type="submit" />
        </form>
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

stories.add('simple form validation', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Form />
        </RainbowFirebaseApp>
    );
});
