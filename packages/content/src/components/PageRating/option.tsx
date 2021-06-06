import React from 'react';
import { StyledInput, StyledLabel } from './styled';
import { OptionProps } from './types';

const Option: React.FC<OptionProps> = ({
    className,
    style,
    name,
    isSelected,
    value,
    onChange,
    children,
}: OptionProps) => (
    <StyledLabel className={className} style={style} isSelected={isSelected}>
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
