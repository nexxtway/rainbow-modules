import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, LoadingShape } from 'react-rainbow-components';
import { Context } from '../../context';
import Value from './value';
import {
    Container,
    Label,
    ValueContainer,
    StyledLoadingValue,
    StyledLoadingLabel,
    IconContainer,
} from './styled';

export default function RecordField(props) {
    const {
        className,
        style,
        label,
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
        ...restComponentProps
    } = props;
    const context = useContext(Context);
    const { privateVariant } = context || {};

    return (
        <Container className={className} style={style} privateVariant={privateVariant}>
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
                        restComponentProps={restComponentProps}
                    />
                </RenderIf>
            </ValueContainer>
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
    href: undefined,
    onClick: () => {},
    component: undefined,
    target: '_self',
};
