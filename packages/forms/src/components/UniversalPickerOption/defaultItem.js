import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem } from './styled';

export default function DefaultItem(props) {
    const { children, ...rest } = props;

    return <StyledItem {...rest}>{children}</StyledItem>;
}

DefaultItem.propTypes = {
    state: PropTypes.shape({
        isSelected: PropTypes.bool,
        isFocused: PropTypes.bool,
    }),
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

DefaultItem.defaultProps = {
    state: {
        isSelected: false,
        isFocused: false,
    },
    disabled: false,
    children: [],
};
