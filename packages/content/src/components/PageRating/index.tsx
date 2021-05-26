import React, { ChangeEvent } from 'react';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { PageRatingProps, Values } from './types';
import { StyledContainer, StyledLegend, StyledOptionsContainer } from './styled';
import Option from './option';
import { SadIcon, SmilingIcon, NormalIcon } from './icons';

const PageRating: React.FC<PageRatingProps> = ({
    className,
    style,
    label,
    labelAlignment,
    value,
    onChange,
}: PageRatingProps) => {
    const name = useUniqueIdentifier('pageRating');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && onChange !== undefined) {
            onChange(event.target.value as Values);
        }
    };

    return (
        <StyledContainer className={className} style={style} labelAlignment={labelAlignment}>
            <StyledLegend>{label}</StyledLegend>
            <StyledOptionsContainer>
                <Option
                    name={name}
                    value="sad"
                    isSelected={value === 'sad'}
                    onChange={handleChange}
                >
                    <SadIcon />
                </Option>
                <Option
                    name={name}
                    value="neutral"
                    isSelected={value === 'neutral'}
                    onChange={handleChange}
                >
                    <NormalIcon />
                </Option>
                <Option
                    name={name}
                    value="happy"
                    isSelected={value === 'happy'}
                    onChange={handleChange}
                >
                    <SmilingIcon />
                </Option>
            </StyledOptionsContainer>
        </StyledContainer>
    );
};

export default PageRating;
