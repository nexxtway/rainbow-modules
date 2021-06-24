import React from 'react';
import { StyledLink } from './styled';
import { LinkButtonProps } from './types';

const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
    const { to, children } = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <StyledLink href={to} {...props}>
            {children}
        </StyledLink>
    );
};

LinkButton.defaultProps = {
    className: undefined,
    style: undefined,
    children: null,
    variant: 'neutral',
    shaded: false,
    size: 'medium',
    to: undefined,
    target: undefined,
    replace: false,
};

export default LinkButton;
