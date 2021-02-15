import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field } from '@rainbow-modules/forms';
import getComponent from './helpers/getComponent';
import { FieldLabel } from './styled';

const typeMap = {
    text: 'text',
    currency: 'number',
    number: 'number',
    percent: 'number',
    url: 'text',
};

const Fields = ({ label: labelInProps, name, value, placeholder, type, validate }) => {
    const label = <FieldLabel>{labelInProps}</FieldLabel>;
    const Component = getComponent(type);
    const inputType = typeMap[type] || undefined;
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current && inputRef.current.focus) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <Field
            className="rainbow-m-bottom_large"
            label={label}
            name={name}
            initialValue={value}
            labelAlignment="left"
            type={inputType}
            placeholder={placeholder}
            component={Component}
            validate={validate}
            autoComplete="off"
            ref={inputRef}
        />
    );
};

Fields.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
        PropTypes.instanceOf(Date),
    ]),
    type: PropTypes.oneOf([
        'text',
        'currency',
        'number',
        'percent',
        'date',
        'time',
        'dateTime',
        'url',
    ]),
    placeholder: PropTypes.string,
    validate: PropTypes.func,
};

Fields.defaultProps = {
    label: undefined,
    name: undefined,
    value: undefined,
    type: 'text',
    placeholder: undefined,
    validate: undefined,
};

export default Fields;
