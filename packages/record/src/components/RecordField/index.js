import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, LoadingShape } from 'react-rainbow-components';
import { PencilFilled } from '@rainbow-modules/icons';
import { Context } from '../../context';
import Value from './value';
import {
    Container,
    Label,
    ValueContainer,
    StyledLoadingValue,
    StyledLoadingLabel,
    IconContainer,
    EditIconContainer,
} from './styled';
import UniversalFormOverlay from '../../../../forms/src/components/UniversalFormOverlay';
import Fields from './fields';

export default function RecordField(props) {
    const {
        className,
        style,
        label,
        name,
        value,
        type,
        isLoading,
        icon,
        iconPosition,
        currency,
        href,
        component,
        onClick,
        target,
        isEditable,
        onChange,
        isDirty,
        ...restComponentProps
    } = props;
    const context = useContext(Context);
    const { privateVariant } = context || {};
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
                privateVariant={privateVariant}
                isEditable={isEditable}
                isDirty={isDirty}
                ref={containerRef}
                onClick={handleContainerClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Label privateVariant={privateVariant}>
                    <RenderIf isTrue={isLoading}>
                        <StyledLoadingLabel privateVariant={privateVariant}>
                            <LoadingShape />
                        </StyledLoadingLabel>
                    </RenderIf>
                    <RenderIf isTrue={!isLoading}>{label}</RenderIf>
                </Label>
                <ValueContainer
                    privateVariant={privateVariant}
                    type={type}
                    icon={icon}
                    iconPosition={iconPosition}
                >
                    <RenderIf isTrue={isLoading}>
                        <StyledLoadingValue>
                            <LoadingShape />
                        </StyledLoadingValue>
                    </RenderIf>
                    <RenderIf isTrue={!isLoading}>
                        <RenderIf isTrue={icon}>
                            <IconContainer iconPosition={iconPosition}>{icon}</IconContainer>
                        </RenderIf>
                        <Value
                            component={component}
                            type={type}
                            value={value}
                            currency={currency}
                            href={href}
                            onClick={onClick}
                            target={target}
                            isEditable={isEditable}
                            restComponentProps={restComponentProps}
                        />
                        <RenderIf isTrue={isEditable}>
                            <EditIconContainer isHover={isHover}>
                                <PencilFilled />
                            </EditIconContainer>
                        </RenderIf>
                    </RenderIf>
                </ValueContainer>
            </Container>
            <RenderIf isTrue={isEditable}>
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
                />
            </RenderIf>
        </>
    );
}

RecordField.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The label of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** the name of the field */
    name: PropTypes.string,
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
    /** A string with the url to navigate to when type is url. */
    href: PropTypes.string,
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
    /** A boolean that specifies whether a RecordField is editable or not. Its default value is false.  */
    isEditable: PropTypes.bool,
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** When true, indicates that the value as been modified */
    isDirty: PropTypes.bool,
};

RecordField.defaultProps = {
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
    href: undefined,
    onClick: () => {},
    component: undefined,
    target: '_self',
    isEditable: false,
    onChange: () => {},
    isDirty: false,
};
