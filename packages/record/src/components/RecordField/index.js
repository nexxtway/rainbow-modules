import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { Context } from '../../context';
import { Container, Label, Value, StyledLoading } from './styled';

export default function RecordField(props) {
    const { className, style, label, value, type, isLoading } = props;
    const context = useContext(Context);
    const { privateVariant } = context || {};

    return (
        <Container className={className} style={style} privateVariant={privateVariant}>
            <Label privateVariant={privateVariant}>{label}</Label>
            <RenderIf isTrue={isLoading}>
                <StyledLoading />
            </RenderIf>
            <RenderIf isTrue={!isLoading}>
                <Value privateVariant={privateVariant} type={type}>
                    {value}
                </Value>
            </RenderIf>
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
};

RecordField.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    value: undefined,
    type: 'text',
    isLoading: false,
};
