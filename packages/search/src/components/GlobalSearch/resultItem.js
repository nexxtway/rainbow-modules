/* eslint-disable react/prop-types */
import React from 'react';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import { ResultItemContainer, OptionText, IconContainer } from './styled';

const Content = (props) => {
    const { component: Component, icon, title, description, ...rest } = props;

    if (Component) {
        return <Component icon={icon} title={title} description={description} {...rest} />;
    }
    return (
        <ResultItemContainer>
            <IconContainer>{icon}</IconContainer>
            <OptionText>
                <LabelText value={title} />
                <DescriptionText value={description} />
            </OptionText>
        </ResultItemContainer>
    );
};

const ResultItem = (props) => {
    const { icon, onClick, component, ...rest } = props;

    return (
        <li role="presentation" onClick={onClick}>
            <Content component={component} icon={icon} {...rest} />
        </li>
    );
};

export default ResultItem;
