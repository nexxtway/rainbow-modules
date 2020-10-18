import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import { useTheme } from 'react-rainbow-components/libs/hooks';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import {
    colorToRgba,
    replaceAlpha,
    getContrastText,
    isValidColor,
} from 'react-rainbow-components/styles/helpers/color';
import TilePicker from '../TilePicker';
import TileOption from './tileOption';
import { StyledContainer, StyledLabelText, StyledValue, StyledContent } from './styled';

/**
 * Component to show information of dashboard
 */
export default function Tile(props) {
    const {
        label,
        value,
        color: colorProp,
        backgroundColor: backgroundColorProp,
        name,
        id,
        className,
        style,
    } = props;
    const isTilePicker = useContext(TilePicker.context) !== undefined;

    const mainBackground = useTheme().rainbow.palette.background.main;
    const backgroundColor = isValidColor(backgroundColorProp)
        ? backgroundColorProp
        : mainBackground;
    const color = isValidColor(colorProp) ? colorProp : getContrastText(backgroundColor);
    const labelStyle = { color: replaceAlpha(colorToRgba(color), 0.7) };

    return (
        <StyledContainer id={id} className={className} style={style} hasMargin={isTilePicker}>
            <RenderIf isTrue={isTilePicker}>
                <UniversalPickerOption
                    name={name}
                    component={TileOption}
                    value={value}
                    label={label}
                    color={color}
                    backgroundColor={backgroundColor}
                />
            </RenderIf>
            <RenderIf isTrue={!isTilePicker}>
                <StyledContent style={{ backgroundColor }}>
                    <StyledLabelText style={labelStyle}>{label}</StyledLabelText>
                    <StyledValue style={{ color }}>{value}</StyledValue>
                </StyledContent>
            </RenderIf>
        </StyledContainer>
    );
}

Tile.propTypes = {
    /** Text label of the element. */
    label: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The color of the text. */
    color: PropTypes.string,
    /** The background color of the element. */
    backgroundColor: PropTypes.string,
    /** It is a unique value that identifies the tile option. */
    name: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Tile.defaultProps = {
    label: undefined,
    value: undefined,
    color: undefined,
    backgroundColor: undefined,
    name: undefined,
    id: undefined,
    className: undefined,
    style: undefined,
};
