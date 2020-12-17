/* eslint-disable react/prop-types */
import React from 'react';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import { ResultItemContainer, OptionText, IconContainer } from './styled';

const ResultItem = (props) => {
    const { icon, label, description, onClick } = props;
    return (
        <ResultItemContainer onClick={onClick}>
            <IconContainer>{icon}</IconContainer>
            <OptionText>
                <LabelText value={label} />
                <DescriptionText value={description} />
            </OptionText>
        </ResultItemContainer>
    );
};

export default ResultItem;
