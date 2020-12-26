import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

const UniversalForm = (props) => {
    const { onSubmit, id, children, initialValues } = props;
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={(formProps) => {
                const { handleSubmit } = formProps;
                return (
                    <form onSubmit={handleSubmit} noValidate id={id}>
                        {children}
                    </form>
                );
            }}
        />
    );
};

UniversalForm.propTypes = {
    onSubmit: PropTypes.func,
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    initialValues: PropTypes.object,
};

UniversalForm.defaultProps = {
    onSubmit: () => {},
    children: null,
    initialValues: {},
};

export default UniversalForm;
