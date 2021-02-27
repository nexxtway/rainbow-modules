import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Input } from 'react-rainbow-components';

const typeMap = {
    text: 'text',
    number: 'number',
};

const OverlayField = ({ name, value, validate, type }) => {
    const inputRef = useRef();
    const inputType = typeMap[type] || 'text';

    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current && inputRef.current.focus) {
                inputRef.current.focus();
            }
        }, 0);
    }, []);

    return (
        <Field
            className="rainbow-m-bottom_large"
            name={name}
            initialValue={value}
            type={inputType}
            component={Input}
            validate={validate}
            autoComplete="off"
            ref={inputRef}
        />
    );
};

OverlayField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    validate: PropTypes.func,
    type: PropTypes.string.isRequired,
};

OverlayField.defaultProps = {
    name: undefined,
    value: undefined,
    validate: undefined,
};

export default OverlayField;
