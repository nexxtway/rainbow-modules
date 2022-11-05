import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import RequiredAsterisk from '../RequiredAsterisk';
import { StyledContainer, StyledLabel, StyledOptionsContainer, StyledError } from './styled';

function useErrorMessageId(error) {
    const errorMessageId = useUniqueIdentifier('error-message');
    return useMemo(() => {
        if (error) {
            return errorMessageId;
        }
        return undefined;
    }, [errorMessageId, error]);
}

const UniversalPickerContext = createContext({});

export default function UniversalPicker(props) {
    const {
        name,
        style,
        label,
        labelAlignment,
        required,
        error,
        id,
        children,
        value,
        multiple,
        className,
        size,
        direction,
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
                <StyledLabel labelAlignment={labelAlignment}>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>
            <StyledOptionsContainer direction={direction}>
                <UniversalPickerContext.Provider value={context}>
                    {children}
                </UniversalPickerContext.Provider>
            </StyledOptionsContainer>
            <RenderIf isTrue={!!error}>
                <StyledError id={errorMessageId}>{error}</StyledError>
            </RenderIf>
        </StyledContainer>
    );
}

UniversalPicker.context = UniversalPickerContext;

UniversalPicker.propTypes = {
    /** The name of UniversalPicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the UniversalPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the UniversalPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the UniversalPicker label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** Specifies that an UniversalPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The size of the UniversalPicker. Valid values are small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The direction of the children. */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
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
    name: undefined,
    value: undefined,
    multiple: false,
    required: false,
    label: '',
    labelAlignment: 'center',
    error: null,
    size: 'medium',
    direction: 'horizontal',
    onChange: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    children: [],
};
