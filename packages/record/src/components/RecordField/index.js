/* eslint-disable react/no-unused-prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Field } from '@rainbow-modules/forms';
import { Context } from '../../context';
import EditableRecordField from './editableRecordField';
import Content from './content';
import { Container } from './styled';

export default function RecordField(props) {
    const { className, style, component, name, isEditable, validate, id } = props;
    const context = useContext(Context);
    const { privateVariant } = context || {};

    if (isEditable) {
        return (
            <Field
                {...props}
                name={name}
                component={EditableRecordField}
                recordComponent={component}
                recordValidate={validate}
                privateVariant={privateVariant}
                id={id}
            />
        );
    }

    return (
        <Container className={className} style={style} id={id} privateVariant={privateVariant}>
            <Content {...props} privateVariant={privateVariant} />
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
        PropTypes.instanceOf(Date),
    ]),
    /** The type prop specifies the format that the component will have, by default is text. */
    type: PropTypes.oneOf([
        'text',
        'currency',
        'number',
        'percent',
        'date',
        'time',
        'dateTime',
        'url',
    ]),
    /** Specifies whether data is being loaded. The default is false. */
    isLoading: PropTypes.bool,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** A string that define the type of currency, the default value is USD */
    currency: PropTypes.string,
    /** The action triggered when click on the url when type is url. */
    onClick: PropTypes.func,
    /**
     * The component class or function to customize how the value will be rendered.
     */
    component: PropTypes.func,
    /** Indicates where to display the linked URL, as the name for a browsing context (a tab, window, or iframe). */
    target: PropTypes.oneOfType([
        PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
        PropTypes.string,
    ]),
    /** The name of the field. */
    name: PropTypes.string,
    /** A boolean that specifies whether a RecordField is editable or not. Its default value is false.  */
    isEditable: PropTypes.bool,
    /** A function that takes the field value, all the values of the form and the meta data about the field and returns an error
     * if the value is invalid, or undefined if the value is valid. */
    validate: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
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
    currency: 'USD',
    onClick: () => {},
    component: undefined,
    target: '_self',
    name: undefined,
    isEditable: false,
    validate: undefined,
    id: undefined,
};
