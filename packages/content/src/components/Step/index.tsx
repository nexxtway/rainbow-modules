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
    id,
    className,
    style,
    number,
    header,
    description,
    children,
}: StepProps) => {
    return (
        <StyledContainer id={id} className={className} style={style}>
            <StyledNumber>{number}</StyledNumber>
            <StyledStepContent>
                <StyledHeader data-cy="step-header">{header}</StyledHeader>
                <StyledDescription data-cy="step-description">{description}</StyledDescription>
                {children}
            </StyledStepContent>
        </StyledContainer>
    );
};

Step.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    number: PropTypes.number,
    header: PropTypes.node,
    description: PropTypes.node,
    children: PropTypes.node,
};

Step.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    number: undefined,
    header: undefined,
    description: undefined,
    children: undefined,
};

export default Step;
