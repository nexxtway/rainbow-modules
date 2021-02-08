import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import getComponent from './helpers/getComponent';
import { FieldLabel } from './styled';

const Fields = ({ label: labelInProps, name, value, placeholder, type }) => {
    const label = <FieldLabel>{labelInProps}</FieldLabel>;
    const Component = getComponent(type);
    return (
        <Field
            className="rainbow-m-bottom_large"
            label={label}
            name={name}
            initialValue={value}
            labelAlignment="left"
            type={type}
            placeholder={placeholder}
            component={Component}
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
};

Fields.defaultProps = {
    label: undefined,
    name: undefined,
    value: undefined,
    type: 'text',
    placeholder: undefined,
};

export default Fields;
