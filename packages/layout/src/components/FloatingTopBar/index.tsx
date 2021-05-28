import React from 'react';
import { FloatingTopBarProps } from './types';
import { StyledContainer } from './styled';

const FloatingTopBar: React.FC<FloatingTopBarProps> = ({
    className,
    style,
    isOpen,
    children,
}: FloatingTopBarProps) => (
    <StyledContainer className={className} style={style} isOpen={isOpen}>
        {children}
    </StyledContainer>
);

export default FloatingTopBar;
