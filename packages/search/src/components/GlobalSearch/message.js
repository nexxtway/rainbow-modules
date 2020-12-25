/* eslint-disable react/prop-types */
import React from 'react';
import { MessageContainer, Title, Description } from './styled/message';

const Message = ({ title, description }) => {
    return (
        <MessageContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </MessageContainer>
    );
};

export default Message;
