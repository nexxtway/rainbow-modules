import React from 'react';
import { StyledInput, StyledLabel } from './styled';
import { OptionProps } from './types';

const Option: React.FC<OptionProps> = ({
    name,
    isSelected,
    selectedColor,
    value,
    onChange,
    children,
}: OptionProps) => (
    <StyledLabel isSelected={isSelected} selectedColor={selectedColor}>
        <StyledInput
            type="radio"
            name={name}
            checked={isSelected}
            value={value}
            onChange={onChange}
        />
        {children}
    </StyledLabel>
);

export default Option;
