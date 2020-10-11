import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem } from './styled';

export default function DefaultItem(props) {
    const { state, children } = props;
    const { isSelected, isFocused } = state;

    return (
        <StyledItem isSelected={isSelected} isFocused={isFocused}>
            {children}
        </StyledItem>
    );
}

DefaultItem.propTypes = {
    state: PropTypes.shape({
        isSelected: PropTypes.bool,
        isFocused: PropTypes.bool,
    }),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

DefaultItem.defaultProps = {
    state: {
        isSelected: false,
        isFocused: false,
    },
    children: [],
};
