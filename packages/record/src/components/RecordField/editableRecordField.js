/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useReduxForm } from '@rainbow-modules/hooks';
import { UniversalFormOverlay } from '@rainbow-modules/forms';
import { Container } from './styled';
import Fields from './fields';
import Content from './content';

export default function EditableRecordField(props) {
    const reduxFormProps = useReduxForm(props);
    const {
        className,
        style,
        label,
        name,
        value,
        type,
        recordComponent: component,
        recordValidate: validate,
        onChange,
        privateVariant,
        dirty,
        id,
    } = reduxFormProps;
    const containerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleContainerClick = (event) => {
        if (event.target.tagName !== 'A') setIsOpen(true);
    };

    const handleMouseEnter = () => setIsHover(true);

    const handleMouseLeave = () => setIsHover(false);

    const closeForm = () => {
        setIsOpen(false);
    };

    const handleSubmit = (values) => {
        const { [name]: value } = values;
        closeForm();
        onChange(value);
    };

    return (
        <>
            <Container
                className={className}
                style={style}
                id={id}
                privateVariant={privateVariant}
                isEditable
                isDirty={dirty}
                ref={containerRef}
                onClick={handleContainerClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Content
                    {...reduxFormProps}
                    isHover={isHover}
                    privateVariant={privateVariant}
                    component={component}
                />
            </Container>
            <UniversalFormOverlay
                triggerElementRef={containerRef}
                isOpen={isOpen}
                fields={Fields}
                onRequestClose={closeForm}
                onSumbit={handleSubmit}
                type={type}
                label={label}
                name={name}
                value={value}
                validate={validate}
            />
        </>
    );
}

EditableRecordField.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
        PropTypes.instanceOf(Date),
    ]),
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
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    currency: PropTypes.string,
    onClick: PropTypes.func,
    recordComponent: PropTypes.func,
    target: PropTypes.oneOfType([
        PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
        PropTypes.string,
    ]),
    onChange: PropTypes.func,
    meta: PropTypes.object,
};

EditableRecordField.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    name: undefined,
    value: undefined,
    type: 'text',
    isLoading: false,
    icon: undefined,
    iconPosition: 'left',
    currency: 'USD',
    onClick: () => {},
    recordComponent: undefined,
    target: '_self',
    onChange: () => {},
    meta: {},
};
