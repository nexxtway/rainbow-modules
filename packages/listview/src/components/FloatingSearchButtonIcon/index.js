import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-rainbow-components';
import FloatingSearch from '../FloatingSearch';

const searchStyle = {
    maxWidth: '500px',
};

const FloatingSearchButtonIcon = (props) => {
    const {
        assistiveText,
        className,
        disabled,
        icon,
        id,
        shaded,
        size,
        style,
        tabIndex,
        title,
        variant,
        placeholder,
        onChange,
        value,
    } = props;

    const triggerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSearch = () => {
        onChange('');
        setIsOpen(false);
    };

    return (
        <>
            <ButtonIcon
                assistiveText={assistiveText}
                className={className}
                disabled={disabled}
                icon={icon}
                id={id}
                onClick={toggleOpen}
                shaded={shaded}
                size={size}
                style={style}
                tabIndex={tabIndex}
                title={title}
                variant={variant}
                ref={triggerRef}
            />
            <FloatingSearch
                isVisible={isOpen}
                triggerElementRef={() => triggerRef.current.htmlElementRef}
                placeholder={placeholder}
                style={searchStyle}
                onChange={onChange}
                value={value}
                onRequestClose={handleCloseSearch}
            />
        </>
    );
};

FloatingSearchButtonIcon.propTypes = {
    /** The icon to show if it is passed.
     * It must be a svg icon or a font icon. It is a required value. */
    icon: PropTypes.node,
    /** The variant changes the appearance of the button. Accepted variants include
     * base, brand, success, destructive, neutral, outline-brand, border, border-filled, inverse and border-inverse.
     * This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
    ]),
    /** The size of the buttonIcon. For the base variant, options include x-small, small, medium,
     * and large. For non-base variants, options include xx-small, x-small, small, and medium.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only border-filled, brand, and success variant can be shaded. */
    shaded: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies the type of button. Valid values are button, reset, and submit.
     * This value defaults to button. */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Specifies the value of an input element. */
    value: PropTypes.string,
};

FloatingSearchButtonIcon.defaultProps = {
    value: undefined,
    icon: null,
    variant: 'base',
    size: 'medium',
    shaded: false,
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onChange: () => {},
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    placeholder: undefined,
};

export default FloatingSearchButtonIcon;
