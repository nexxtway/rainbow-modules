/* eslint-disable react/prop-types */
import React from 'react';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import { StyledOption, OptionText, OptionIconContainer } from './styled';

const Option = (props) => {
    const { icon, label, description, onClick, isActive, onHover } = props;
    return (
        <StyledOption
            isActive={isActive}
            onClick={onClick}
            onMouseEnter={onHover}
            aria-selected={isActive}
        >
            <OptionIconContainer>{icon}</OptionIconContainer>
            <OptionText>
                <LabelText value={label} />
                <DescriptionText value={description} />
            </OptionText>
        </StyledOption>
    );
};

export default Option;
