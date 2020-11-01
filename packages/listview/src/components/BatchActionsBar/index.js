import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from '@rainbow-modules/validation';
import { Close } from '@rainbow-modules/icons';
import { RenderIf } from 'react-rainbow-components';
import {
    StyledContainer,
    StyledBadge,
    StyledLabel,
    StyledClosetButton,
    StyledButtonsContainer,
    StyledLeftContent,
    StyledRightContent,
} from './styled';

const BatchActionsBar = (props) => {
    const { label, itemsLength, onRequestClose, className, style, children, isVisible } = props;
    const showCloseButton = isFunction(onRequestClose);

    return (
        <RenderIf isTrue={isVisible}>
            <StyledContainer className={className} style={style}>
                <StyledLeftContent>
                    <StyledBadge label={itemsLength} title={label} />
                    <StyledLabel>{label}</StyledLabel>
                </StyledLeftContent>
                <StyledRightContent>
                    <StyledButtonsContainer>{children}</StyledButtonsContainer>
                    <RenderIf isTrue={showCloseButton}>
                        <StyledClosetButton icon={<Close />} onClick={onRequestClose} />
                    </RenderIf>
                </StyledRightContent>
            </StyledContainer>
        </RenderIf>
    );
};

BatchActionsBar.propTypes = {
    /** The title at the left of the BatchActionsBar component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The title at the left of the BatchActionsBar component. */
    itemsLength: PropTypes.number,
    /** The title at the left of the BatchActionsBar component. */
    onRequestClose: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** An object with custom style applied to the outer element. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** Show/Hide the component. */
    isVisible: PropTypes.bool,
};

BatchActionsBar.defaultProps = {
    label: undefined,
    itemsLength: 0,
    onRequestClose: undefined,
    className: undefined,
    style: undefined,
    children: [],
    isVisible: false,
};

export default BatchActionsBar;
