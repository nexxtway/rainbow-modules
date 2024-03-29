import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { PageRatingProps, Values } from './types';
import { StyledContainer, StyledLegend, StyledOptionsContainer } from './styled';
import { SadOption, NeutralOption, HappyOption } from './styled/options';
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
    const legendId = useUniqueIdentifier('legend');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && onChange !== undefined) {
            onChange(event.target.value as Values);
        }
    };

    return (
        <StyledContainer
            className={className}
            style={style}
            labelAlignment={labelAlignment}
            role="group"
            aria-labelledby={legendId}
        >
            <StyledLegend id={legendId}>{label}</StyledLegend>
            <StyledOptionsContainer>
                <SadOption
                    name={name}
                    value="sad"
                    isSelected={value === 'sad'}
                    onChange={handleChange}
                >
                    <SadIcon />
                </SadOption>
                <NeutralOption
                    name={name}
                    value="neutral"
                    isSelected={value === 'neutral'}
                    onChange={handleChange}
                >
                    <NormalIcon />
                </NeutralOption>
                <HappyOption
                    name={name}
                    value="happy"
                    isSelected={value === 'happy'}
                    onChange={handleChange}
                >
                    <SmilingIcon />
                </HappyOption>
            </StyledOptionsContainer>
        </StyledContainer>
    );
};

PageRating.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.string,
    labelAlignment: PropTypes.oneOf(['center', 'left', 'right', 'inlineLeft', 'inlineRight']),
    value: PropTypes.oneOf(['happy', 'neutral', 'sad']),
    onChange: PropTypes.func,
};

PageRating.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    labelAlignment: 'center',
    value: undefined,
    onChange: undefined,
};

export default PageRating;
