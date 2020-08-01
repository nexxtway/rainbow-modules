import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import useWindowResize from 'react-rainbow-components/libs/hooks/useWindowResize';
import useOutsideClick from 'react-rainbow-components/libs/hooks/useOutsideClick';
import { StyledIconBox, Dropdown } from './styled';

const RainbowIconItem = (props) => {
    const { rainbowIcon, iconBoxId } = props;
    const triggerRef = useRef(null);
    const dropdownRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(
        dropdownRef,
        (event) => {
            if (event.target !== triggerRef.current.buttonRef.current) {
                setIsOpen(false);
            }
        },
        isOpen,
    );
    useWindowResize(() => setIsOpen(false), isOpen);

    return (
        <>
            <StyledIconBox id={iconBoxId} ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                <rainbowIcon.icon />
                <div>{rainbowIcon.name}</div>
            </StyledIconBox>
            <InternalOverlay
                isVisible={isOpen}
                render={() => (
                    <Dropdown ref={dropdownRef}>
                        <div>Using rainbow/icons</div>
                        <div>Example</div>
                    </Dropdown>
                )}
                triggerElementRef={() => triggerRef.current.buttonRef}
            />
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
