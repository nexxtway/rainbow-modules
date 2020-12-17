import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-rainbow-components';
import InternalTooltip from 'react-rainbow-components/components/InternalTooltip';
import { useScrollingIntent } from '@rainbow-modules/hooks';
import { Cancel } from '@rainbow-modules/icons';
import { isSupported, copy } from './helpers';

export default function CopyToClipboardButton(props) {
    const { style, id, className, value, copyText, copiedText } = props;
    const triggerRef = useRef();
    const tooltipRef = useRef();
    const [isVisible, setVisible] = useState(false);
    const [isCopied, setCopied] = useState(false);
    const text = isCopied ? copiedText : copyText;

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

    const hiddenTooltip = () => {
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
                icon={<Cancel />}
                onClick={handleClick}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={hiddenTooltip}
                onFocus={() => setVisible(true)}
                onBlur={hiddenTooltip}
                ref={triggerRef}
            />
            <InternalTooltip
                triggerElementRef={() => triggerRef.current.htmlElementRef}
                isVisible={isVisible}
                ref={tooltipRef}
            >
                {text}
            </InternalTooltip>
        </>
    );
}

CopyToClipboardButton.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    id: PropTypes.string,
    value: PropTypes.string,
    copyText: PropTypes.element,
    copiedText: PropTypes.element,
};

CopyToClipboardButton.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    value: undefined,
    copyText: 'Click to copy',
    copiedText: 'Copied',
};
