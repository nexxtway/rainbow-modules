/* eslint-disable react/no-unused-prop-types */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Picklist, Option } from 'react-rainbow-components';
import useReduxForm from 'react-rainbow-components/libs/hooks/useReduxForm';
import countries from './countries';

const Countries = () => {
    return countries.map(({ isoCode, country, flagIcon }) => {
        return <Option key={isoCode} name={isoCode} label={country} icon={flagIcon} />;
    });
};

const useSelectedValue = (value) => {
    return useMemo(() => {
        if (value && value.isoCode) {
            const country = countries.find(({ isoCode }) => isoCode === value.isoCode);
            if (country) {
                const { flagIcon, country: label, isoCode } = country;
                return {
                    icon: flagIcon,
                    label,
                    name: isoCode,
                };
            }
        }
        return null;
    }, [value]);
};

const CountryPicker = (props) => {
    const {
        className,
        style,
        value,
        onChange,
        label,
        labelAlignment,
        disabled,
        hideLabel,
        placeholder,
        name,
        readOnly,
        required,
        error,
    } = useReduxForm(props);

    const selectedValue = useSelectedValue(value);

    const handleChange = ({ name }) => {
        return onChange({
            isoCode: name,
        });
    };

    return (
        <Picklist
            className={className}
            style={style}
            label={label}
            labelAlignment={labelAlignment}
            onChange={handleChange}
            value={selectedValue}
            enableSearch
            disabled={disabled}
            hideLabel={hideLabel}
            placeholder={placeholder}
            name={name}
            readOnly={readOnly}
            required={required}
            error={error}
        >
            <Countries />
        </Picklist>
    );
};

CountryPicker.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies the selected value of the picker. */
    value: PropTypes.shape({
        isoCode: PropTypes.string,
    }),
    /** The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** Text label for the picker. */
    label: PropTypes.node,
    /** Describes the position of the label. Options include left, center and right. This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** Specifies that the picker is disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** A boolean to hide the label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The name of the picker. */
    name: PropTypes.string,
    /** Specifies that the picker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that an option must be selected before submitting the form. This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the picker must be filled out before submitting the form. */
    error: PropTypes.node,
};

CountryPicker.defaultProps = {
    className: undefined,
    style: undefined,
    value: undefined,
    onChange: () => {},
    label: undefined,
    labelAlignment: 'center',
    disabled: false,
    hideLabel: false,
    placeholder: undefined,
    name: undefined,
    readOnly: false,
    required: false,
    error: undefined,
};

export default CountryPicker;
