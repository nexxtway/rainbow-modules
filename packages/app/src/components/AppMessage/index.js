import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Message from './message';

const AppMessage = (props) => {
    const { isVisible, message, variant, timeout, onHideMessage } = props;
    if (isVisible) {
        return createPortal(
            <Message
                isVisible={isVisible}
                message={message}
                variant={variant}
                timeout={timeout}
                onHideMessage={onHideMessage}
            />,
            document.body,
        );
    }
    return null;
};

AppMessage.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    message: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'warning', 'error']),
    timeout: PropTypes.number,
    onHideMessage: PropTypes.func,
};

AppMessage.defaultProps = {
    message: undefined,
    variant: 'error',
    timeout: undefined,
    onHideMessage: () => {},
};

export default AppMessage;
