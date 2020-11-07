/* eslint-disable react/prop-types */
import React from 'react';
import { StyledOption, OptionText, Label, Description, OptionIconContainer } from './styled';

const Option = (props) => {
    const { icon, label, description, onClick } = props;
    return (
        <StyledOption onClick={onClick}>
            <OptionIconContainer>{icon}</OptionIconContainer>
            <OptionText>
                <Label>{label}</Label>
                <Description>{description}</Description>
            </OptionText>
        </StyledOption>
    );
};

export default Option;
