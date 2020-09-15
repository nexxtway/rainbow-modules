import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { colorToRgba, replaceAlpha } from 'react-rainbow-components/styles/helpers/color';
import { StyledContainer, StyledInput, StyledLabelInput, StyledLabel, StyledValue } from './styled';

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
    const { ariaDescribedby, groupName, onChange, value, multiple } = {};

    const inputId = useUniqueIdentifier('tile-input');

    const type = multiple ? 'checkbox' : 'radio';
    const name = groupName || nameProp;
    const isChecked = () => {
        if (multiple) {
            return Array.isArray(value) && value.includes(nameProp);
        }

        return typeof value === 'string' && nameProp === value;
    };

    const labelStyle = { color: replaceAlpha(colorToRgba(color), 0.7) };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <StyledInput
                type={type}
                id={inputId}
                name={name}
                checked={isChecked()}
                aria-describedby={ariaDescribedby}
                onChange={(event) => onChange(nameProp, event.target.checked)}
            />
            <StyledLabelInput htmlFor={inputId} style={{ backgroundColor }}>
                <StyledLabel style={labelStyle}>{label}</StyledLabel>
                <StyledValue style={{ color }}>{valueProp}</StyledValue>
            </StyledLabelInput>
        </StyledContainer>
    );
}

Tile.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    /** It is a unique value that identifies the picker option. */
    name: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
    className: PropTypes.string,
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
