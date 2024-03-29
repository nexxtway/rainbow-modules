import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { InternalTooltip, useDefaultTooltipConnector } from 'react-rainbow-components';
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
                disabled={!onClick}
                ref={triggerRef}
                aria-label={tooltip}
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
