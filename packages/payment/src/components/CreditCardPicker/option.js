import React from 'react';
import PropTypes from 'prop-types';
import { StyledRadio, StyledRadioItem } from './styled';

export default function Option({ children, ...rest }) {
    return (
        <StyledRadioItem {...rest}>
            <StyledRadio {...rest} />
            {children}
        </StyledRadioItem>
    );
}

Option.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Option.defaultProps = {
    children: null,
};
