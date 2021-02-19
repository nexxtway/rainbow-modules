import React from 'react';
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
