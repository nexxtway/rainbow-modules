import React from 'react';
import PropTypes from 'prop-types';
import { StyledLi, StyledUl, Bullet, StyledSpan } from './styled';

const Legend = (props) => {
    const { children } = props;
    return <StyledUl>{children}</StyledUl>;
};

Legend.propTypes = {
    children: PropTypes.node,
};

Legend.defaultProps = {
    children: undefined,
};

const LegendItem = (props) => {
    const { color, children } = props;
    return (
        <StyledLi>
            <Bullet color={color} />
            <StyledSpan color={color}>{children}</StyledSpan>
        </StyledLi>
    );
};

LegendItem.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
};

LegendItem.defaultProps = {
    color: '#ccc',
    children: undefined,
};

export { Legend, LegendItem };
