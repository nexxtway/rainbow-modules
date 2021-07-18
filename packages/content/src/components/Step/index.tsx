import React from 'react';
import PropTypes from 'prop-types';
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

Step.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    number: PropTypes.number,
    header: PropTypes.node,
    description: PropTypes.node,
    children: PropTypes.node,
};

Step.defaultProps = {
    className: undefined,
    style: undefined,
    number: undefined,
    header: undefined,
    description: undefined,
    children: undefined,
};

export default Step;
