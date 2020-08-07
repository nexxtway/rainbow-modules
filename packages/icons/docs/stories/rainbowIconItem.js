import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import useWindowResize from 'react-rainbow-components/libs/hooks/useWindowResize';
import useUniqueIdentifier from 'react-rainbow-components/libs/hooks/useUniqueIdentifier';
import { StyledTooltip, StyledTitle, StyledText, StyledButton, StyledSample } from './styled';
import { ESCAPE_KEY } from './helpers/constants';

const RainbowIconItem = (props) => {
    const { rainbowIcon, iconBoxId } = props;

    const triggerRef = useRef();
    const helpTextId = useUniqueIdentifier('help-text');
    const [isFocused, setIsFocused] = useState(false);
    const isHoverTooltip = useRef(false);
    const isClickTooltip = useRef(false);
    const [isOpen, setIsOpen] = useState(false);
    const closeOverlay = useCallback(() => setIsOpen(false), []);
    const openOverlay = useCallback(() => setIsOpen(true), []);

    useEffect(() => {
        if (isFocused) {
            openOverlay();
        } else {
            closeOverlay();
        }
    }, [closeOverlay, isFocused, openOverlay]);

    useWindowResize(() => closeOverlay(), isOpen);

    const handleBlur = () => {
        if (!isClickTooltip.current) {
            setIsFocused(false);
        }
    };

    const handleButtonMouseLeave = () => {
        if (!isFocused) {
            setTimeout(() => {
                if (!isHoverTooltip.current) closeOverlay();
            }, 50);
        }
    };

    const handleTooltipMouseDown = () => {
        isClickTooltip.current = true;
    };

    const handleTooltipMouseUp = () => {
        isClickTooltip.current = false;
        triggerRef.current.focus();
    };

    const handleTooltipMouseEnter = () => {
        isHoverTooltip.current = true;
    };

    const handleTooltipMouseLeave = () => {
        isHoverTooltip.current = false;
        if (!isFocused) {
            closeOverlay();
        }
    };

    const handleKeyPressed = (event) => {
        if (event.keyCode === ESCAPE_KEY) {
            event.preventDefault();
            closeOverlay();
        }
    };

    const Icon = rainbowIcon.icon;
    const iconName = rainbowIcon.name.charAt(0).toUpperCase() + rainbowIcon.name.slice(1);
    const importLine = `import { ${iconName} } from ‘@rainbowmodules/icons’`;
    const iconTag = `<${iconName} color=“#096666” size={32} />`;

    return (
        <>
            <StyledButton
                id={iconBoxId}
                ref={triggerRef}
                onMouseEnter={openOverlay}
                onMouseLeave={handleButtonMouseLeave}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onKeyDown={handleKeyPressed}
                type="button"
                ariaLabelledby={helpTextId}
            >
                <Icon />
                <div>{rainbowIcon.name}</div>
            </StyledButton>
            <RenderIf isTrue={!!rainbowIcon}>
                <InternalOverlay
                    isVisible={isOpen}
                    render={() => {
                        return (
                            <StyledTooltip
                                id={helpTextId}
                                role="tooltip"
                                onMouseDown={handleTooltipMouseDown}
                                onMouseUp={handleTooltipMouseUp}
                                onMouseEnter={handleTooltipMouseEnter}
                                onMouseLeave={handleTooltipMouseLeave}
                            >
                                <StyledTitle>Using rainbow/icons</StyledTitle>
                                <StyledSample>Example</StyledSample>
                                <StyledText>
                                    <div>{importLine}</div>
                                    <div>{iconTag}</div>
                                </StyledText>
                            </StyledTooltip>
                        );
                    }}
                    triggerElementRef={triggerRef}
                />
            </RenderIf>
        </>
    );
};

RainbowIconItem.propTypes = {
    /** Icons list with all existing icons in Rainbow Icons Collection. */
    rainbowIcon: PropTypes.object,
    /** id number for the box. */
    iconBoxId: PropTypes.number,
};

RainbowIconItem.defaultProps = {
    rainbowIcon: null,
    iconBoxId: null,
};

export default RainbowIconItem;
