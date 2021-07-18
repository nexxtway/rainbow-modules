import React, { useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import { BadgeOverlay, ButtonIcon, RenderIf } from 'react-rainbow-components';
import { Bell } from '@rainbow-modules/icons';
import { useOutsideClick } from '@rainbow-modules/hooks';
import {
    ButtonIconHandle,
    NotificationMenuProps,
    NotificationMenuHandles,
    Notification as NotificationInterface,
} from './types';
import { NotificationMenuContainer, StyledSpinner } from './styled';
import Dropdown from './dropdown';
import positionResolver from './helpers/positionResolver';

const NotificationMenu: React.ForwardRefExoticComponent<NotificationMenuProps> = React.forwardRef<
    NotificationMenuHandles,
    NotificationMenuProps
>((props: NotificationMenuProps, ref) => {
    const { label, footer, unreads, isLoading, notifications, onClick, className, style } = props;
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<ButtonIconHandle>();
    const dropdownRef = useRef<HTMLElement>(null);
    const inProgress = notifications?.some((value) => value.status === 'inProgress');
    const icon = (
        <BadgeOverlay overlap="circle" isHidden={!unreads}>
            <Bell />
        </BadgeOverlay>
    );

    useOutsideClick(
        () => buttonRef.current?.htmlElementRef.current,
        (event) => {
            if (dropdownRef.current?.contains(event.target as Node)) return;
            setIsOpen(false);
        },
        isOpen,
    );

    useImperativeHandle(ref, () => ({
        close: () => {
            setIsOpen(false);
        },
    }));

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (notification: NotificationInterface) => {
        setIsOpen(!isOpen);
        if (onClick) {
            onClick(notification);
        }
    };

    return (
        <NotificationMenuContainer className={className} style={style}>
            <RenderIf isTrue={inProgress}>
                <StyledSpinner type="arc" variant="brand">
                    <ButtonIcon icon={icon} onClick={handleButtonClick} ref={buttonRef} />
                </StyledSpinner>
            </RenderIf>
            <RenderIf isTrue={!inProgress}>
                <ButtonIcon icon={icon} onClick={handleButtonClick} ref={buttonRef} />
            </RenderIf>
            <InternalOverlay
                isVisible={isOpen}
                triggerElementRef={buttonRef.current?.htmlElementRef}
                positionResolver={positionResolver}
                render={() => (
                    <Dropdown
                        label={label}
                        footer={footer}
                        notifications={notifications}
                        unreads={unreads}
                        isLoading={isLoading}
                        onClick={handleItemClick}
                        ref={dropdownRef}
                    />
                )}
            />
        </NotificationMenuContainer>
    );
});

NotificationMenu.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.node,
    footer: PropTypes.node,
    isLoading: PropTypes.bool,
    unreads: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            onClick: PropTypes.func,
            isLoading: PropTypes.bool,
        }).isRequired,
    ),
    onClick: PropTypes.func,
};

NotificationMenu.defaultProps = {
    label: 'Notifications',
    footer: null,
    isLoading: false,
    unreads: false,
    notifications: [],
    className: undefined,
    style: undefined,
    onClick: undefined,
};

export default NotificationMenu;
