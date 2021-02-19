import React, { MouseEvent, useRef } from 'react';
import { StyledOption, StyledCloseIcon, StyledName, StyledIconContainer } from './styled';
import { OptionProps } from './types';

const Option: React.FC<OptionProps> = ({
    children,
    isSelected,
    isHover,
    isFocused,
}: OptionProps) => {
    const iconContainerRef = useRef<HTMLAnchorElement>(null);
    const handleClick = (event: MouseEvent) => {
        const buttonElement = iconContainerRef.current;
        if (isSelected && !buttonElement?.contains(event.target as Node)) {
            event.preventDefault();
        }
    };

    return (
        <StyledOption
            isSelected={isSelected}
            isHover={isHover}
            isFocused={isFocused}
            onClick={handleClick}
        >
            <StyledName>{children}</StyledName>
            <StyledIconContainer isSelected={isSelected} ref={iconContainerRef}>
                <StyledCloseIcon />
            </StyledIconContainer>
        </StyledOption>
    );
};

export default Option;
