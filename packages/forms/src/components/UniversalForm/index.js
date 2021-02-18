import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

const UniversalForm = (props) => {
    const { onSubmit, id, children, initialValues, validate, style, className } = props;
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
            render={(formProps) => {
                const { handleSubmit } = formProps;
                return (
                    <form
                        className={className}
                        style={style}
                        onSubmit={handleSubmit}
                        noValidate
                        id={id}
                    >
                        {children}
                    </form>
                );
            }}
        />
    );
};

UniversalForm.propTypes = {
    /** Callback that will be invoke after on submit event, it will receive an object with all
     * the values of the form already validated.
     */
    onSubmit: PropTypes.func,
    /** The id of the form element */
    id: PropTypes.string,
    /** The markup of your form goes here. Use react-final-form Field component to conform
     * the fields of your form. https://final-form.org/react
     * */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The initial values of the form e.g. { name: 'Max', age: 30 } */
    initialValues: PropTypes.object,
    /** Validate function that takes all the values of the form and returns any validation errors or empty object when no errors.
     * Validation errors must be in the same shape as the values of the form.
     */
    validate: PropTypes.func,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
};

UniversalForm.defaultProps = {
    onSubmit: () => {},
    id: undefined,
    children: null,
    initialValues: undefined,
    validate: undefined,
    className: undefined,
    style: undefined,
};

export default UniversalForm;
