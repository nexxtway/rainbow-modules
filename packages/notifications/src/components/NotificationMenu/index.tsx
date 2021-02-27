import React, { useRef, useState } from 'react';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import { BadgeOverlay, ButtonIcon, RenderIf } from 'react-rainbow-components';
import { Star } from '@rainbow-modules/icons';
import { useOutsideClick } from '@rainbow-modules/hooks';
import { ButtonIconHandle, NotificationMenuProps } from './types';
import { NotificationMenuContainer, StyledIcon, StyledSpinner } from './styled';
import Dropdown from './dropdown';
import positionResolver from './helpers/positionResolver';

const NotificationMenu: React.FC<NotificationMenuProps> = ({
    label,
    footer,
    unreads,
    isLoading,
    notifications,
    onClick,
}: NotificationMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<ButtonIconHandle>();
    const dropdownRef = useRef<HTMLElement>(null);
    const inProgress = notifications?.some((value) => value.status === 'inProgress');
    const icon = (
        <StyledIcon unreads={unreads}>
            <Star />
        </StyledIcon>
    );

    useOutsideClick(
        () => buttonRef.current?.htmlElementRef.current,
        (event) => {
            if (dropdownRef.current?.contains(event.target as Node)) return;
            setIsOpen(false);
        },
        isOpen,
    );

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NotificationMenuContainer>
            <RenderIf isTrue={inProgress}>
                <StyledSpinner type="arc" variant="brand">
                    <BadgeOverlay isHidden={!isLoading}>
                        <ButtonIcon icon={icon} onClick={handleButtonClick} ref={buttonRef} />
                    </BadgeOverlay>
                </StyledSpinner>
            </RenderIf>
            <RenderIf isTrue={!inProgress}>
                <BadgeOverlay isHidden={!isLoading}>
                    <ButtonIcon icon={icon} onClick={handleButtonClick} ref={buttonRef} />
                </BadgeOverlay>
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
                        onClick={onClick}
                        ref={dropdownRef}
                    />
                )}
            />
        </NotificationMenuContainer>
    );
};

NotificationMenu.defaultProps = {
    label: 'Notifications',
    footer: null,
    isLoading: false,
    unreads: false,
    notifications: [],
};

export default NotificationMenu;
