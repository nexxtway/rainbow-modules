import React from 'react';
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

export default FloatingBar;
