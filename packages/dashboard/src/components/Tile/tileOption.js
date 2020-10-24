import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { Check } from '@rainbow-modules/icons';
import { colorToRgba, replaceAlpha } from 'react-rainbow-components/styles/helpers/color';
import { StyledOption, StyledLabelText, StyledValue, StyledCheckmarkContainer } from './styled';
import TilePicker from '../TilePicker';

export default function TileOption(props) {
    const { label, value, backgroundColor, color, ...rest } = props;
    const { isSelected, isFocused } = rest;
    const { registerChild, unregisterChild, setFocused } = useContext(TilePicker.context);
    const ref = useRef();

    useEffect(() => {
        registerChild(ref, {});
        return () => unregisterChild(ref);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isFocused) {
            // setTimeout(() => setFocused(ref));
            setFocused(ref);
        }
    }, [isFocused, setFocused]);

    const labelStyle = { color: replaceAlpha(colorToRgba(color), 0.7) };

    return (
        <StyledOption ref={ref} {...rest} style={{ backgroundColor }} role="option">
            <RenderIf isTrue={isSelected}>
                <StyledCheckmarkContainer>
                    <Check style={{ color }} />
                </StyledCheckmarkContainer>
            </RenderIf>
            <StyledLabelText style={labelStyle}>{label}</StyledLabelText>
            <StyledValue style={{ color }}>{value}</StyledValue>
        </StyledOption>
    );
}

TileOption.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    registerChild: PropTypes.func,
    unregisterChild: PropTypes.func,
    setFocused: PropTypes.func,
};

TileOption.defaultProps = {
    label: undefined,
    value: undefined,
    color: undefined,
    backgroundColor: undefined,
    registerChild: () => {},
    unregisterChild: () => {},
    setFocused: () => {},
};
