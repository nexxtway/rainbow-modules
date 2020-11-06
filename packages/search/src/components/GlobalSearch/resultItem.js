/* eslint-disable react/prop-types */
import React from 'react';
import { ResultItemContainer, OptionText, Label, Description, IconContainer } from './styled';

const ResultItem = (props) => {
    const { icon, label, description, onClick } = props;
    return (
        <ResultItemContainer onClick={onClick}>
            <IconContainer>{icon}</IconContainer>
            <OptionText>
                <Label>{label}</Label>
                <Description>{description}</Description>
            </OptionText>
        </ResultItemContainer>
    );
};

export default ResultItem;
