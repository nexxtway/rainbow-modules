import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { Provider } from './context';
import StyledContainer from './styled';

/**
 * TilePicker can be either radio buttons or checkboxes that are visually enhanced.
 */
export default function TilePicker(props) {
    const { style, id, children, value, multiple, className, name, onChange } = props;

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
        groupName: groupNameId,
        onChange: handleChange,
        value,
        multiple,
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Provider value={context}>{children}</Provider>
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
    className: undefined,
    style: undefined,
    children: [],
    multiple: false,
};
