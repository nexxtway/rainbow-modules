import React from 'react';
import { StyledInput, StyledLabel } from './styled';
import { IconProps } from './types';

const Option: React.FC<IconProps> = ({ isSelected, value, onChange, children }: IconProps) => {
    return (
        <StyledLabel isSelected={isSelected}>
            <StyledInput
                type="radio"
                name="pageRating"
                checked={isSelected}
                value={value}
                onChange={onChange}
            />
            {children}
        </StyledLabel>
    );
};

export default Option;
