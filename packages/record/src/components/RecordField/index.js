import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecordFieldContext } from './context';
import { Container, Label, Value } from './styled';

export default function RecordField(props) {
    const { className, style, label, value, type } = props;
    const context = useContext(RecordFieldContext);
    const { privateParentName } = context || {};
    return (
        <Container className={className} style={style} privateParentName={privateParentName}>
            <Label>{label}</Label>
            <Value type={type}>{value}</Value>
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
};

RecordField.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    value: undefined,
    type: 'text',
};
