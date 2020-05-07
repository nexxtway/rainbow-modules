import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable-next-line import/no-unresolved */
import { Close, Error, Done, Warning } from '@rainbow-modules/icons';
import { Container, MessageContainer, MessageIcon, MessageText, ButtonIcon } from './styled';

const iconMap = {
    error: Error,
    success: Done,
    warning: Warning,
};

const Message = (props) => {
    const { isVisible, message, variant, timeout, onHideMessage } = props;
    const timeoutId = useRef();

    useEffect(() => {
        if (typeof timeout === 'number') {
            timeoutId.current = setTimeout(() => onHideMessage(), timeout);
        }
    }, [timeout, onHideMessage]);

    const hideMessage = () => {
        onHideMessage();
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
    };

    return (
        <Container isVisible={isVisible} variant={variant}>
            <MessageContainer>
                <MessageIcon variant={variant} as={iconMap[variant]} />
                <MessageText variant={variant}>{message}</MessageText>
                <ButtonIcon
                    variant={variant}
                    size="medium"
                    icon={<Close />}
                    onClick={hideMessage}
                />
            </MessageContainer>
        </Container>
    );
};

Message.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    message: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'warning', 'error']),
    timeout: PropTypes.number,
    onHideMessage: PropTypes.func,
};

Message.defaultProps = {
    message: undefined,
    variant: 'error',
    timeout: undefined,
    onHideMessage: () => {},
};

export default Message;
