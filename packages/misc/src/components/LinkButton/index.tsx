import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styled';
import { LinkButtonProps } from './types';

const LinkButton: React.FC<LinkButtonProps> = ({
    className,
    style,
    children,
    to,
    variant,
    size,
    shaded,
    target,
    disabled,
}: LinkButtonProps) => (
    <StyledLink
        className={className}
        style={style}
        variant={variant}
        size={size}
        shaded={shaded}
        to={to}
        target={target}
        disabled={disabled}
    >
        {children}
    </StyledLink>
);

LinkButton.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
    ]),
    shaded: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    to: PropTypes.string,
    target: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

LinkButton.defaultProps = {
    className: undefined,
    style: undefined,
    variant: 'base',
    shaded: false,
    size: 'medium',
    to: undefined,
    target: undefined,
    disabled: false,
    children: null,
};

export default LinkButton;
