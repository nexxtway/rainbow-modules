/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import UniversalPicker from '../UniversalPicker';
import DefaultItem from './defaultItem';
import { StyledContainer, StyledInput, StyledLabel } from './styled';

export default function UniversalPickerOption(props) {
    const { component, id, className, style, name, ...rest } = props;
    const { onChange, ariaDescribedby, groupName, value, multiple, ...context } =
        useContext(UniversalPicker.context) || {};

    const { disabled } = rest;

    const [isFocused, setFocused] = useState(false);
    const [isHover, setHover] = useState(false);

    const type = multiple ? 'checkbox' : 'radio';

    const inputId = useUniqueIdentifier('universal-picker_item');

    const isSelected = () => {
        if (multiple) {
            return Array.isArray(value) && value.includes(name);
        }

        return typeof value === 'string' && name === value;
    };

    const Item = component || DefaultItem;

    return (
        <StyledContainer className={className} style={style} id={id}>
            <StyledInput
                as="input"
                type={type}
                id={inputId}
                name={groupName}
                checked={isSelected()}
                aria-describedby={ariaDescribedby}
                onChange={(event) => onChange(name, event.target.checked)}
                disabled={disabled}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />

            <StyledLabel
                htmlFor={inputId}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Item
                    {...rest}
                    {...context}
                    isSelected={isSelected()}
                    isFocused={isFocused}
                    isHover={isHover}
                />
            </StyledLabel>
        </StyledContainer>
    );
}

UniversalPickerOption.propTypes = {
    /** Functional component or class that will be rendered with the props:
     * name, disabled, multiple, groupName, value and the state isSelected and isFocused. */
    component: PropTypes.elementType,
    /** It is a unique value that identifies the picker option. */
    name: PropTypes.string,
    /** Specifies that an UniversalPickerItem element should be disabled.
     * This value defaults to false. */
    disabled: PropTypes.bool,
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

UniversalPickerOption.defaultProps = {
    component: undefined,
    name: undefined,
    disabled: false,
    id: undefined,
    className: undefined,
    style: undefined,
    children: [],
};
