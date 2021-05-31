import React from 'react';
import { FloatingTopBarProps } from './types';
import { StyledContainer } from './styled';

const FloatingTopBar: React.FC<FloatingTopBarProps> = ({
    className,
    style,
    isVisible,
    children,
}: FloatingTopBarProps) => {
    return (
        <StyledContainer className={className} style={style} isVisible={isVisible}>
            {children}
        </StyledContainer>
    );
};

export default FloatingTopBar;
