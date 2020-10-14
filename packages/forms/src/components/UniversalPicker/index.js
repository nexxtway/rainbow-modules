import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import RequiredAsterisk from 'react-rainbow-components/components/RequiredAsterisk';
import StyledError from 'react-rainbow-components/components/Input/styled/errorText';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { useErrorMessageId } from 'react-rainbow-components/libs/hooks';
import { StyledContainer, StyledLabel, StyledOptionsContainer } from './styled';
import { Provider } from './context';

export default function UniversalPicker(props) {
    const {
        name,
        style,
        label,
        required,
        error,
        id,
        children,
        value,
        multiple,
        className,
        size,
        onChange,
    } = props;

    const nameUnique = useUniqueIdentifier('universal-picker');
    const groupName = name || nameUnique;
    const errorMessageId = useErrorMessageId(error);

    const handleChange = (optionName, isChecked) => {
        if (multiple) {
            if (Array.isArray(value)) {
                const currentValue = isChecked
                    ? [...value, optionName]
                    : value.filter((item) => item !== optionName);

                return onChange(currentValue);
            }

            const currentValue = isChecked ? [optionName] : [];
            return onChange(currentValue);
        }
        return onChange(optionName);
    };

    const context = {
        onChange: handleChange,
        value,
        multiple,
        ariaDescribedby: errorMessageId,
        groupName,
        size,
        error,
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>
            <StyledOptionsContainer>
                <Provider value={context}>{children}</Provider>
            </StyledOptionsContainer>
            <RenderIf isTrue={!!error}>
                <StyledError id={errorMessageId}>{error}</StyledError>
            </RenderIf>
        </StyledContainer>
    );
}

UniversalPicker.propTypes = {
    /** The name of VisualPicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the VisualPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the VisualPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an VisualPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The size of the VisualPicker. Valid values are small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

UniversalPicker.defaultProps = {
    name: null,
    value: undefined,
    multiple: false,
    required: false,
    label: '',
    error: null,
    size: 'medium',
    onChange: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    children: [],
};
