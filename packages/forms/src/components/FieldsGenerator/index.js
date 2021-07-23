import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Input, Textarea, Select } from 'react-rainbow-components';
import { Container, StyledCheckboxToggle } from './styled';
import resolveValidation from './helpers/resolveValidation';
import getNumberValue from './helpers/getNumberValue';
import getSelectOptions from './helpers/getSelectOptions';
import getLabelAlignment from './helpers/getLabelAlignment';

const fieldTypes = [
    'text',
    'password',
    'datetime',
    'datetime-local',
    'date',
    'month',
    'time',
    'week',
    'number',
    'email',
    'url',
    'search',
    'tel',
    'color',
];

const componentsMap = {
    text: Input,
    number: Input,
    textarea: Textarea,
    select: Select,
    boolean: StyledCheckboxToggle,
};

const FieldsGenerator = (props) => {
    const { schema, types, validations, labelAlignment } = props;
    if (Array.isArray(schema) && types) {
        return schema.map((field) => {
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
                options,
                default: defaultValue,
                ...rest
            } = field;
            const minValue = getNumberValue(min);
            const maxValue = getNumberValue(max);
            const maxLengthValue = getNumberValue(maxLength);
            const minLengthValue = getNumberValue(minLength);

            const isValidType = fieldTypes.includes(type);
            const inputType = isValidType ? type : 'text';
            const validate = resolveValidation(
                {
                    ...field,
                    minValue,
                    maxValue,
                    maxLengthValue,
                    minLengthValue,
                },
                rest,
                validations,
            );

            const isRequired = !!required;

            if (types[type]) {
                const { component, props: componentProps } = types[type];
                const Component = component || Input;
                const typeWhenNoComponent = component ? undefined : inputType;

                return (
                    <Container key={name}>
                        <Field
                            {...componentProps}
                            component={Component}
                            name={name}
                            validate={validate}
                            label={label}
                            type={typeWhenNoComponent}
                            required={isRequired}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readOnly}
                            max={maxValue}
                            min={minValue}
                            maxLength={maxLengthValue}
                            minLength={minLengthValue}
                            defaultValue={defaultValue}
                            labelAlignment={labelAlignment}
                        />
                    </Container>
                );
            }

            const DefaultComponent = componentsMap[type] || Input;

            const selectOptions = getSelectOptions(type, options);

            return (
                <Container key={name}>
                    <Field
                        component={DefaultComponent}
                        name={name}
                        validate={validate}
                        label={label}
                        type={inputType}
                        required={isRequired}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        max={maxValue}
                        min={minValue}
                        maxLength={maxLengthValue}
                        minLength={minLengthValue}
                        options={selectOptions}
                        defaultValue={defaultValue}
                        labelAlignment={getLabelAlignment(labelAlignment, type)}
                    />
                </Container>
            );
        });
    }
    return null;
};

const numberTypeShape = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        value: PropTypes.number,
        errorMessage: PropTypes.string,
    }),
]);

FieldsGenerator.propTypes = {
    /** An array with the fields definitions. */
    schema: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string,
            required: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.shape({
                    errorMessage: PropTypes.string,
                }),
            ]),
            placeholder: PropTypes.string,
            disabled: PropTypes.bool,
            readOnly: PropTypes.bool,
            max: numberTypeShape,
            min: numberTypeShape,
            maxLength: numberTypeShape,
            minLength: numberTypeShape,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string,
                    label: PropTypes.string,
                }),
            ),
            default: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    ),
    /** A map where you assign a component and its props to a field type. You can also pass custom props to the components e.g:
     * types: { tex: { component: Input, props: { className: 'my-class', ... } } }
     */
    types: PropTypes.object,
    /** An object with the custom validations. e.g: { isEmail: (value) => \regex\.test(value) } */
    validations: PropTypes.object,
    /** Describes the position of the Fields label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

FieldsGenerator.defaultProps = {
    schema: [],
    types: {},
    validations: {},
    labelAlignment: 'center',
};

export default FieldsGenerator;
