import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessage = styled.span``;

export default function SpinnerMessage({ message }) {
    if (typeof message === 'string') {
        return <StyledMessage>{message}</StyledMessage>;
    }

    return message;
}

SpinnerMessage.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

SpinnerMessage.defaultProps = {
    message: undefined,
};
