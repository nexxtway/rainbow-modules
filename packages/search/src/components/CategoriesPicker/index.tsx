import React from 'react';
import PropTypes from 'prop-types';
import { UniversalPicker } from '@rainbow-modules/forms';
import { CategoriesPickerProps } from './types';
import { StyledContainer, StyledLabel } from './styled';
import Categories from './categories';

export const CategoriesPicker: React.FunctionComponent<CategoriesPickerProps> = ({
    id,
    className,
    style,
    name,
    value,
    options,
    multiple,
    label,
    onChange,
}: CategoriesPickerProps) => {
    const handleChange = (newValue: string | string[]) => {
        if (onChange) onChange(newValue);
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <StyledLabel>{label}</StyledLabel>
            <UniversalPicker
                name={name}
                value={value}
                labelAlignment="left"
                multiple={multiple}
                onChange={handleChange}
                direction="vertical"
            >
                <Categories options={options} />
            </UniversalPicker>
        </StyledContainer>
    );
};

CategoriesPicker.propTypes = {
    /**
     * The ID of the container element
     */
    id: PropTypes.string,
    /**
     * A CSS class for the outer element, in addition to the component's base classes.
     */
    className: PropTypes.string,
    /**
     * An object with custom style applied for the outer element.
     */
    style: PropTypes.object,
    /**
     * The name of CategoriesPicker.
     */
    name: PropTypes.string,
    /**
     * The value of the element.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string.isRequired)]),
    /**
     * An array containing the category names to show.
     */
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    /**
     * When true, multiple categories can be selected at the same time.
     */
    multiple: PropTypes.bool,
    /**
     * The title at the top of the CategoriesPicker component.
     */
    label: PropTypes.node,
    /**
     * The action triggered when the value changes.
     */
    onChange: PropTypes.func,
};

CategoriesPicker.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    label: undefined,
    name: undefined,
    options: [],
    value: undefined,
    multiple: false,
    onChange: undefined,
};

export default CategoriesPicker;
