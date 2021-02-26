import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { useIntl } from 'react-intl';
import { DropdownProps } from './types';
import { DropdownContainer, Footer, Header, StyledUnreadsText } from './styled';
import Notifications from './notifications';
import messages from './messages';

const Dropdown = React.forwardRef<HTMLElement, DropdownProps>(
    // eslint-disable-next-line react/prop-types
    ({ label, footer, notifications, unreads, isLoading, onClick }, ref) => {
        const intl = useIntl();
        const unreadText = `${unreads} ${intl.formatMessage(messages.unread)}`;
        const shouldRenderUnreads = unreads && !Number.isNaN(unreads);
        return (
            <DropdownContainer ref={ref}>
                <Header>
                    {label}
                    <RenderIf isTrue={shouldRenderUnreads}>
                        <StyledUnreadsText>{unreadText}</StyledUnreadsText>
                    </RenderIf>
                </Header>
                <Notifications
                    notifications={notifications}
                    isLoading={isLoading}
                    onClick={onClick}
                />
                <RenderIf isTrue={footer}>
                    <Footer>{footer}</Footer>
                </RenderIf>
            </DropdownContainer>
        );
    },
);

Dropdown.defaultProps = {
    label: 'Notifications',
    footer: null,
};

export default Dropdown;
