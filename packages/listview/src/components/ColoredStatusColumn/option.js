import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import darken from 'react-rainbow-components/styles/helpers/color/darken';
import { StyledColoredOption, StyledHeader, StyledCheckmark } from './styled';

const ColoredOption = ({ label, color, backgroundColor, textTransform, isActive, isSelected }) => {
    const finalBackgroundColor = isActive ? darken(backgroundColor) : backgroundColor;
    return (
        <StyledColoredOption
            color={color}
            backgroundColor={finalBackgroundColor}
            textTransform={textTransform}
        >
            <span>{label}</span>
            <RenderIf isTrue={isSelected}>
                <StyledCheckmark color={color} />
            </RenderIf>
        </StyledColoredOption>
    );
};

ColoredOption.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    textTransform: PropTypes.oneOf([
        'none',
        'capitalize',
        'uppercase',
        'lowercase',
        'initial',
        'inherit',
    ]),
    isActive: PropTypes.bool,
    isSelected: PropTypes.bool,
};

ColoredOption.defaultProps = {
    label: undefined,
    color: undefined,
    backgroundColor: undefined,
    textTransform: 'capitalize',
    isActive: false,
    isSelected: false,
};

const HeaderOption = () => {
    return <StyledHeader>Change Status</StyledHeader>;
};

export { ColoredOption, HeaderOption };
