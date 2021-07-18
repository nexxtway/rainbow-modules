import React from 'react';
import PropTypes from 'prop-types';
import { FloatingBarProps } from './types';
import { StyledContainer } from './styled';

const FloatingBar: React.FC<FloatingBarProps> = ({
    className,
    style,
    isVisible,
    children,
}: FloatingBarProps) => {
    return (
        <StyledContainer className={className} style={style} isVisible={isVisible}>
            {children}
        </StyledContainer>
    );
};

FloatingBar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isVisible: PropTypes.bool,
    children: PropTypes.node,
};

FloatingBar.defaultProps = {
    className: undefined,
    style: undefined,
    isVisible: false,
    children: undefined,
};

export default FloatingBar;
