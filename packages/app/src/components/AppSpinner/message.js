import React from 'react';
import PropTypes from 'prop-types';
import { StyledMessage } from './styled';

export default function SpinnerMessage({ message }) {
    if (typeof message === 'string') {
        return <StyledMessage>{message}</StyledMessage>;
    }

    return message;
}

SpinnerMessage.propTypes = {
    message: PropTypes.node,
};

SpinnerMessage.defaultProps = {
    message: undefined,
};
