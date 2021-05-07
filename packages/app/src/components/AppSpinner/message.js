import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessage = styled.span`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 1rem;
    margin-top: 0.5rem;
`;

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
