import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import InternalTooltip from 'react-rainbow-components/components/InternalTooltip';
import useDefaultTooltipConnector from 'react-rainbow-components/components/InternalTooltip/hooks/useDefaultTooltipConnector';
import { StyledActionButton } from './styled';

const ActionButton = ({ tooltip, children, onClick }) => {
    const triggerRef = useRef();
    const tooltipRef = useRef();

    const { onMouseEnter, onMouseLeave, isVisible } = useDefaultTooltipConnector({
        tooltipRef,
        triggerRef: () => triggerRef,
    });
    return (
        <>
            <StyledActionButton
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                ref={triggerRef}
            >
                {children}
            </StyledActionButton>
            <InternalTooltip
                isVisible={isVisible}
                ref={tooltipRef}
                preferredPosition="right"
                triggerElementRef={() => triggerRef}
            >
                {tooltip}
            </InternalTooltip>
        </>
    );
};

ActionButton.propTypes = {
    tooltip: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

ActionButton.defaultProps = {
    tooltip: undefined,
    children: undefined,
    onClick: undefined,
};

export default ActionButton;
