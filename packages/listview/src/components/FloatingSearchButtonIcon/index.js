import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Button } from 'react-rainbow-components';
import { isEmpty } from '@rainbow-modules/validation';
import { Filter } from '@rainbow-modules/icons';
import FloatingSearch from '../FloatingSearch';
import { StyledFilterLabel, StyledCircleFilledIcon } from './styled';
import messages from './messages';

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
    const intl = useIntl();
    const buttonIcon = isEmpty(value) || isOpen ? icon : <StyledCircleFilledIcon />;
    const filterButton = intl.formatMessage(messages.filterButton);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSearch = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button
                assistiveText={assistiveText}
                className={className}
                disabled={disabled}
                id={id}
                onClick={toggleOpen}
                shaded={shaded}
                size={size}
                style={style}
                tabIndex={tabIndex}
                title={title}
                variant={variant}
                ref={triggerRef}
            >
                {buttonIcon}
                <StyledFilterLabel>{filterButton}</StyledFilterLabel>
            </Button>
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
    icon: <Filter />,
    variant: 'base',
    size: 'medium',
    shaded: false,
    title: undefined,
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
