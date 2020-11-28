import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { Context } from '../../context';
import {
    Container,
    Label,
    Value,
    StyledLoadingValue,
    StyledLoadingLabel,
    IconContainer,
} from './styled';

export default function RecordField(props) {
    const { className, style, label, value, type, isLoading, icon, iconPosition } = props;
    const context = useContext(Context);
    const { privateVariant } = context || {};

    return (
        <Container className={className} style={style} privateVariant={privateVariant}>
            <Label privateVariant={privateVariant}>
                <RenderIf isTrue={isLoading}>
                    <StyledLoadingLabel privateVariant={privateVariant} />
                </RenderIf>
                <RenderIf isTrue={!isLoading}>{label}</RenderIf>
            </Label>
            <Value
                privateVariant={privateVariant}
                type={type}
                icon={icon}
                iconPosition={iconPosition}
            >
                <RenderIf isTrue={isLoading}>
                    <StyledLoadingValue />
                </RenderIf>
                <RenderIf isTrue={!isLoading}>
                    <IconContainer iconPosition={iconPosition}>{icon}</IconContainer>
                    {value}
                </RenderIf>
            </Value>
        </Container>
    );
}

RecordField.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The label of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The value of the component. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The type prop specifies the format that the component will have, by default is text. */
    type: PropTypes.oneOf(['text']),
    /** Specifies whether data is being loaded. The default is false. */
    isLoading: PropTypes.bool,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
};

RecordField.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    value: undefined,
    type: 'text',
    isLoading: false,
    icon: undefined,
    iconPosition: 'left',
};
