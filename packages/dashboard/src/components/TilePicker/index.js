import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import RequiredAsterisk from 'react-rainbow-components/components/RequiredAsterisk';
import StyledError from 'react-rainbow-components/components/Input/styled/errorText';
import { Provider } from './context';
import { StyledContainer, StyledLabel, StyledOptionsContainer } from './styled';

/**
 * A TilePicker can be either radio buttons or checkboxes that are visually enhanced.
 */
export default function TilePicker(props) {
    const {
        style,
        label,
        required,
        error,
        id,
        children,
        value,
        multiple,
        className,
        name,
        onChange,
    } = props;

    const errorUnique = useUniqueIdentifier('error-message');
    const errorId = error ? errorUnique : undefined;
    const nameUnique = useUniqueIdentifier('tile-picker');
    const groupNameId = name || nameUnique;

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
        ariaDescribedby: errorId,
        groupName: groupNameId,
        onChange: handleChange,
        value,
        multiple,
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
                <StyledError id={errorId}>{error}</StyledError>
            </RenderIf>
        </StyledContainer>
    );
}

TilePicker.propTypes = {
    /** The name of TilePicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the TilePicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the TilePicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an TilePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
};

TilePicker.defaultProps = {
    name: null,
    value: undefined,
    id: undefined,
    onChange: () => {},
    required: false,
    label: '',
    error: null,
    className: undefined,
    style: undefined,
    children: [],
    multiple: false,
};
