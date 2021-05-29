import React from 'react';
import {
    StyledContainer,
    StyledNumber,
    StyledHeader,
    StyledStepContent,
    StyledDescription,
} from './styled';
import { StepProps } from './types';

const Step: React.FC<StepProps> = ({
    className,
    style,
    number,
    header,
    description,
    children,
}: StepProps) => {
    return (
        <StyledContainer className={className} style={style}>
            <StyledNumber>{number}</StyledNumber>
            <StyledStepContent>
                <StyledHeader>{header}</StyledHeader>
                <StyledDescription>{description}</StyledDescription>
                {children}
            </StyledStepContent>
        </StyledContainer>
    );
};

export default Step;
