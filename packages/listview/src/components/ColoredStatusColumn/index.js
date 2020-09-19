import React from 'react';
import PropTypes from 'prop-types';
import useDefaultColors from './hooks/useDefaultColors';
import getBackgroundColor from './helpers/getBackgroundColor';
import getNormalizedColors from './helpers/getNormalizedColors';
import getColor from './helpers/getColor';
import { StyledContainer } from './styled';

const ColoredStatusColumn = ({ value, colors, textTransform }) => {
    const defaultColors = useDefaultColors();
    const map = colors ? getNormalizedColors(colors) : defaultColors;
    const backgroundColor = getBackgroundColor(map[value.toLowerCase()]);
    const color = getColor(map[value.toLowerCase()]);

    return (
        <StyledContainer
            backgroundColor={backgroundColor}
            color={color}
            textTransform={textTransform}
        >
            {value}
        </StyledContainer>
    );
};

export default ColoredStatusColumn;

ColoredStatusColumn.propTypes = {
    /** A string that comes from the data and is displayed in the table cell  */
    value: PropTypes.string,
    /** An object with the mapping that indicates the backgroundColor and color of the component */
    colors: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                backgroundColor: PropTypes.string,
                color: PropTypes.string,
            }),
        ]),
    ),
    /** A string that indicates the format of the font capitalize | uppercase | lowercase */
    textTransform: PropTypes.string,
};

ColoredStatusColumn.defaultProps = {
    value: undefined,
    colors: undefined,
    textTransform: 'capitalize',
};
