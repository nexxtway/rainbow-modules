import React from 'react';
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
}: LinkButtonProps) => (
    <StyledLink
        className={className}
        style={style}
        variant={variant}
        size={size}
        shaded={shaded}
        to={to}
        target={target}
    >
        {children}
    </StyledLink>
);

LinkButton.defaultProps = {
    className: undefined,
    style: undefined,
    children: null,
};

export default LinkButton;
