import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { Check } from '@rainbow-modules/icons';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { colorToRgba, replaceAlpha } from 'react-rainbow-components/styles/helpers/color';
import isChecked from './helpers/isChecked';
import {
    StyledContainer,
    StyledInput,
    StyledLabel,
    StyledLabelText,
    StyledValue,
    StyledCheckmarkContainer,
    StyledContent,
} from './styled';

/**
 * Component to show information of dashboard
 */
export default function Tile(props) {
    const {
        label,
        value: valueProp,
        color,
        backgroundColor,
        name: nameProp,
        id,
        className,
        style,
    } = props;
    const context = undefined;
    const { ariaDescribedby, groupName, onChange, value, multiple } = context || {};

    const inputId = useUniqueIdentifier('tile-input');

    const type = multiple ? 'checkbox' : 'radio';
    const name = groupName || nameProp;
    const checked = isChecked(multiple, value, nameProp);

    const labelStyle = { color: replaceAlpha(colorToRgba(color), 0.7) };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <RenderIf isTrue={!!context}>
                <StyledInput
                    as="input"
                    type={type}
                    id={inputId}
                    name={name}
                    checked={checked}
                    aria-describedby={ariaDescribedby}
                    onChange={(event) => onChange(nameProp, event.target.checked)}
                    value={valueProp}
                />
                <StyledLabel htmlFor={inputId} style={{ backgroundColor }}>
                    <RenderIf isTrue={checked}>
                        <StyledCheckmarkContainer>
                            <Check style={{ color }} />
                        </StyledCheckmarkContainer>
                    </RenderIf>
                    <StyledLabelText style={labelStyle}>{label}</StyledLabelText>
                    <StyledValue style={{ color }}>{valueProp}</StyledValue>
                </StyledLabel>
            </RenderIf>
            <RenderIf isTrue={!context}>
                <StyledContent style={{ backgroundColor }}>
                    <StyledLabelText style={labelStyle}>{label}</StyledLabelText>
                    <StyledValue style={{ color }}>{valueProp}</StyledValue>
                </StyledContent>
            </RenderIf>
        </StyledContainer>
    );
}

Tile.propTypes = {
    /** Text label of the element. */
    label: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.number,
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
    color: '#333333',
    backgroundColor: '#ffffff',
    name: undefined,
    id: undefined,
    className: undefined,
    style: undefined,
};
