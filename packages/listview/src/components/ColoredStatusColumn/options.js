import React from 'react';
import PropTypes from 'prop-types';
import getBackgroundColor from './helpers/getBackgroundColor';
import getColor from './helpers/getColor';
import { ColoredOption } from './option';
import { StyledOption } from './styled';

const Options = ({ map, textTransform }) =>
    Object.keys(map).map((value) => {
        const color = getColor(map[value.toLowerCase()]);
        const backgroundColor = getBackgroundColor(map[value.toLowerCase()]);
        return (
            <StyledOption
                key={value}
                name={value}
                label={value}
                color={color}
                backgroundColor={backgroundColor}
                textTransform={textTransform}
                component={ColoredOption}
            />
        );
    });

Options.propTypes = {
    map: PropTypes.object,
    textTransform: PropTypes.string,
};

Options.defaultProps = {
    map: {},
    textTransform: 'capitalize',
};

export default Options;
