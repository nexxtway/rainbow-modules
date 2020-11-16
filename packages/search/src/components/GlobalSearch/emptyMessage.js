/* eslint-disable react/prop-types */
import React from 'react';
import { EmptyMessageContainer, Title, Description } from './styled/emptyMessage';

const EmptyMessage = () => {
    return (
        <EmptyMessageContainer>
            <Title>Title</Title>
            <Description>Hello</Description>
        </EmptyMessageContainer>
    );
};

export default EmptyMessage;
