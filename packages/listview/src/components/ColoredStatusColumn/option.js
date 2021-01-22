import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { StyledColoredOption, StyledHeader, StyledCheckmark } from './styled';

const ColoredOption = ({ label, color, backgroundColor, textTransform, isSelected }) => {
    return (
        <StyledColoredOption
            color={color}
            backgroundColor={backgroundColor}
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
    isSelected: PropTypes.bool,
};

ColoredOption.defaultProps = {
    label: undefined,
    color: undefined,
    backgroundColor: undefined,
    textTransform: 'capitalize',
    isSelected: false,
};

const HeaderOption = () => {
    return <StyledHeader>Change Status</StyledHeader>;
};

export { ColoredOption, HeaderOption };
