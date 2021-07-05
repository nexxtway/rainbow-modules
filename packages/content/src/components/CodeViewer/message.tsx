import React from 'react';
import { SpinnerContainer } from './styled';
import { MessageProps } from './types';

const Message: React.FC<MessageProps> = ({ text }: MessageProps) => {
    return <SpinnerContainer>{text}</SpinnerContainer>;
};

Message.defaultProps = {
    text: undefined,
};

export default Message;
