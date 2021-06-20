import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import copy from 'copy-to-clipboard';
import { ButtonIcon } from 'react-rainbow-components';
import InternalTooltip from 'react-rainbow-components/components/InternalTooltip';
import { useScrollingIntent } from '@rainbow-modules/hooks';
import { Copy } from '@rainbow-modules/icons';
import { isSupported } from './helpers';
import messages from './messages';

/** A button with modern approach to copy text to clipboard. Would try to use execCommand with fallback to IE specific clipboardData interface. */
export default function CopyToClipboardButton(props) {
    const {
        style,
        id,
        className,
        value,
        variant,
        size,
        shaded,
        disabled,
        tabIndex,
        assistiveText,
    } = props;
    const triggerRef = useRef();
    const tooltipRef = useRef();
    const [isVisible, setVisible] = useState(false);
    const [isCopied, setCopied] = useState(false);
    const formattedMessageProps = isCopied ? messages.copied : messages.clickToCopy;

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setVisible(false);
                setCopied(false);
            }, 3000);
        }
    }, [isCopied]);

    useScrollingIntent({
        callback: () => setVisible(false),
        isListening: isVisible,
        triggerElementRef: () => triggerRef.current.htmlElementRef,
    });

    if (!isSupported()) {
        return null;
    }

    const handleClick = () => {
        const success = copy(value);
        triggerRef.current.focus();
        if (success) {
            setCopied(true);
            setVisible(true);
        }
    };

    const hideTooltip = () => {
        if (!isCopied) {
            setVisible(false);
        }
    };

    return (
        <>
            <ButtonIcon
                id={id}
                className={className}
                style={style}
                icon={<Copy />}
                onClick={handleClick}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={hideTooltip}
                onFocus={() => setVisible(true)}
                onBlur={hideTooltip}
                ref={triggerRef}
                variant={variant}
                size={size}
                shaded={shaded}
                disabled={disabled}
                tabIndex={tabIndex}
                assistiveText={assistiveText}
            />
            <InternalTooltip
                triggerElementRef={() => triggerRef.current.htmlElementRef}
                isVisible={isVisible}
                ref={tooltipRef}
            >
                <FormattedMessage {...formattedMessageProps} />
            </InternalTooltip>
        </>
    );
}

CopyToClipboardButton.propTypes = {
    /** Text to be copied to clipboard */
    value: PropTypes.string,
    /** The variant changes the appearance of the button. Accepted variants include
     * base, brand, success, destructive, neutral, outline-brand, border, border-filled, inverse and border-inverse. */
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
     * and large. For non-base variants, options include xx-small, x-small, small, and medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only border-filled, brand, and success variant can be shaded. */
    shaded: PropTypes.bool,
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. */
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
};

CopyToClipboardButton.defaultProps = {
    value: undefined,
    variant: 'base',
    size: 'medium',
    shaded: false,
    disabled: false,
    tabIndex: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
};
