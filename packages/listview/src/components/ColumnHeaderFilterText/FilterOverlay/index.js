import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '@rainbow-modules/hooks';
import { Button } from 'react-rainbow-components';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import manageTab from 'react-rainbow-components/libs/manageTab';
import {
    StyledContainer,
    StyledHeader,
    StyledTitle,
    StyledTitleName,
    StyledContent,
    StyledFooter,
} from './styled';
import { getNodeText, positionResolver } from '../helpers';

function FilterOverlay(props) {
    const {
        formId,
        triggerElementRef,
        isOpen,
        onOpened,
        onRequestClose,
        submitButtonLabel,
        cancelButtonLabel,
        header,
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
        if (isOpen && event.key === 'Escape' && onRequestClose) {
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
            render={() => {
                return (
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
                                <StyledTitleName>{getNodeText(header)}</StyledTitleName>
                                <span>&quot;</span>
                            </StyledTitle>
                        </StyledHeader>
                        <StyledContent>{children}</StyledContent>
                        <StyledFooter>
                            <Button
                                className="rainbow-m-right_small"
                                label="Cancel"
                                size="small"
                                variant="neutral"
                                onClick={onRequestClose}
                            >
                                {cancelButtonLabel}
                            </Button>
                            <Button
                                label="Save"
                                size="small"
                                variant="brand"
                                type="submit"
                                form={formId}
                            >
                                {submitButtonLabel}
                            </Button>
                        </StyledFooter>
                    </StyledContainer>
                );
            }}
        />
    );
}

FilterOverlay.propTypes = {
    formId: PropTypes.string.isRequired,
    triggerElementRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement).isRequired }),
    ]),
    isOpen: PropTypes.bool,
    onOpened: PropTypes.func,
    onRequestClose: PropTypes.func,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    submitButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FilterOverlay.defaultProps = {
    triggerElementRef: undefined,
    isOpen: false,
    onOpened: undefined,
    onRequestClose: undefined,
    header: undefined,
    submitButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel',
    children: [],
};

export default FilterOverlay;
