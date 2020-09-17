import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'react-rainbow-components/libs/hooks/useTheme.js';
import getContrastText from 'react-rainbow-components/styles/helpers/color/getContrastText.js';
import { StyledContainer } from './styled';

const ColoredStatusColumn = ({ value, colors, textTransform }) => {
    const theme = useTheme();

    const { success, warning, error } = theme.rainbow.palette;
    const defaultColors = {
        success: success.main,
        warning: warning.main,
        error: error.main,
    };

    const map = {
        ...defaultColors,
        ...colors,
    };

    let background;
    let color;
    if (map[value]) {
        if (map[value].backgroundColor) {
            background = map[value].backgroundColor;
        } else {
            background = map[value];
        }
        if (map[value].color) {
            color = map[value].color;
        } else {
            color = getContrastText(background);
        }
    }

    return (
        <StyledContainer background={background} color={color} textTransform={textTransform}>
            {value}
        </StyledContainer>
    );
};

export default ColoredStatusColumn;

ColoredStatusColumn.propTypes = {
    /**  */
    value: PropTypes.node,
    /** An object with the mapping that indicates the backgroundColor and color of the component */
    colors: PropTypes.object,
    /** A string that indicates the format of the font capitalize | uppercase | lowercase */
    textTransform: PropTypes.string,
};

ColoredStatusColumn.defaultProps = {
    value: undefined,
    colors: undefined,
    textTransform: undefined,
};
