import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '@rainbow-modules/hooks';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import manageTab from 'react-rainbow-components/libs/manageTab';
import { Button } from 'react-rainbow-components';
import { StyledContainer, StyledHeader, StyledTitle, StyledTitleName } from './styled';
import { positionResolver } from '../helpers';

function FilterOverlay(props) {
    const {
        triggerElementRef,
        isOpen,
        onOpened,
        onRequestClose,
        onRequestClear,
        headerText,
        children,
    } = props;
    const containerRef = useRef();
    const hasFocus = useRef(false);

    useOutsideClick(
        () => containerRef.current,
        (event) => {
            const triggerHtmlElement = triggerElementRef().current;
            if (!triggerHtmlElement.contains(event.target) && hasFocus.current && onRequestClose) {
                onRequestClose();
            }
        },
        isOpen,
    );

    const handleOpen = () => {
        if (containerRef.current) containerRef.current.focus();
        if (onOpened) onOpened();
    };

    const handleKeyPress = (event) => {
        if (isOpen && event.key === 'Escape' && hasFocus.current && onRequestClose) {
            onRequestClose();
        }
        if (event.key === 'Tab' && containerRef.current !== undefined) {
            manageTab(containerRef.current, event);
        }
    };

    const handleFocus = (event) => {
        if (
            event.target === containerRef.current ||
            (containerRef.current && containerRef.current.contains(event.target))
        ) {
            hasFocus.current = true;
        }
    };

    const handleBlur = (event) => {
        if (
            event.target === containerRef.current ||
            (containerRef.current && containerRef.current.contains(event.target))
        ) {
            hasFocus.current = false;
        }
    };
    return (
        <InternalOverlay
            isVisible={isOpen}
            triggerElementRef={triggerElementRef}
            onOpened={handleOpen}
            positionResolver={positionResolver}
            keepScrollEnabled
        >
            <StyledContainer
                ref={containerRef}
                onKeyDown={handleKeyPress}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex="-1"
            >
                <StyledHeader>
                    <StyledTitle>
                        Filter by &quot;
                        <StyledTitleName>{headerText}</StyledTitleName>
                        <span>&quot;</span>
                    </StyledTitle>
                    <Button
                        variant="border"
                        size="small"
                        label="Clear All"
                        onClick={onRequestClear}
                    />
                </StyledHeader>
                {children}
            </StyledContainer>
        </InternalOverlay>
    );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, no-global-assign, func-names
const HTMLElementType = typeof HTMLElement === 'undefined' ? function () {} : HTMLElement;
FilterOverlay.propTypes = {
    triggerElementRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLElementType).isRequired }),
    ]),
    isOpen: PropTypes.bool,
    onOpened: PropTypes.func,
    onRequestClear: PropTypes.func,
    onRequestClose: PropTypes.func,
    headerText: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FilterOverlay.defaultProps = {
    triggerElementRef: undefined,
    isOpen: false,
    onOpened: undefined,
    onRequestClose: undefined,
    onRequestClear: () => {},
    headerText: undefined,
    children: [],
};

export default FilterOverlay;
