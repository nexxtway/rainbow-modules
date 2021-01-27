import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Input from 'react-rainbow-components/components/Input';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 1rem;
`;

const FieldsGenerator = (props) => {
    const { fieldsSchema, types } = props;
    if (Array.isArray(fieldsSchema) && types) {
        return fieldsSchema.map((field) => {
            const {
                label,
                name,
                type,
                required,
                placeholder,
                disabled,
                readOnly,
                min,
                max,
                maxLength,
                minLength,
            } = field;
            if (types[type]) {
                const { component: Component = Input, props: componentProps } = types[type];

                return (
                    <Container key={name}>
                        <Field
                            {...componentProps}
                            label={label}
                            name={name}
                            type={type}
                            required={required}
                            component={Component}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readOnly}
                            max={max}
                            min={min}
                            maxLength={maxLength}
                            minLength={minLength}
                        />
                    </Container>
                );
            }
            return (
                <Container key={name}>
                    <Field
                        key={name}
                        label={label}
                        name={name}
                        type="text"
                        required={required}
                        component={Input}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        max={max}
                        min={min}
                        maxLength={maxLength}
                        minLength={minLength}
                    />
                </Container>
            );
        });
    }
    return null;
};

FieldsGenerator.propTypes = {
    /** An array with the fields definitions. */
    fieldsSchema: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string,
            required: PropTypes.bool,
            placeholder: PropTypes.string,
            disabled: PropTypes.bool,
            readOnly: PropTypes.bool,
            max: PropTypes.number,
            min: PropTypes.number,
            maxLength: PropTypes.number,
            minLength: PropTypes.number,
        }),
    ),
    /** A map where you assign a component and its props to a field type. You can also pass custom props to the components e.g:
     * types: { tex: { component: Input, props: { className: 'my-class', ... } } }
     */
    types: PropTypes.object,
};

FieldsGenerator.defaultProps = {
    fieldsSchema: [],
    types: undefined,
};

export default FieldsGenerator;
