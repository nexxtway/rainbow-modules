import React from 'react';
import { useIntl } from 'react-intl';
import { LoadingShape } from 'react-rainbow-components';
import Icon from './icons';
import messages from './messages';
import {
    Content,
    CreatedAt,
    Description,
    StatusIconContainer,
    NotificationContainer,
    StatusBadge,
    Title,
    TitleContainer,
    StyledTitleLoading,
    StyledCreatedAtLoading,
    StyledDescriptionLoading,
    StyledIconLoading,
} from './styled';
import { NotificationProps } from './types';

const Notification: React.FC<NotificationProps> = ({
    id,
    title,
    description,
    createdAt,
    status,
    icon,
    unread,
    isLoading,
    onClick,
}: NotificationProps) => {
    const intl = useIntl();
    const isStringStatus = typeof status === 'string';

    if (isLoading) {
        return (
            <NotificationContainer isLoading={isLoading}>
                <StyledIconLoading />
                <Content>
                    <TitleContainer isLoading={isLoading}>
                        <StyledTitleLoading />
                        <StyledCreatedAtLoading />
                    </TitleContainer>
                    <LoadingShape />
                    <StyledDescriptionLoading />
                </Content>
            </NotificationContainer>
        );
    }

    const badgeText = isStringStatus ? intl.formatMessage(messages[status as string]) : null;
    const badge = isStringStatus ? (
        <StatusBadge size="small" status={status}>
            <StatusIconContainer status={status}>
                <Icon icon={status as string} />
            </StatusIconContainer>
            {badgeText}
        </StatusBadge>
    ) : (
        status
    );

    const handleClick = () => {
        if (onClick) {
            onClick({
                id,
                title,
                description,
                createdAt,
                status,
                icon,
                unread,
            });
        }
    };

    return (
        <NotificationContainer unread={unread} hasIcon={!!icon} onClick={handleClick}>
            {icon}
            <Content>
                <TitleContainer>
                    <Title unread={unread}>{title}</Title>
                    <CreatedAt unread={unread}>{createdAt}</CreatedAt>
                </TitleContainer>
                <Description unread={unread}>{description}</Description>
                {badge}
            </Content>
        </NotificationContainer>
    );
};

Notification.defaultProps = {
    id: undefined,
    title: undefined,
    description: undefined,
    createdAt: undefined,
    icon: undefined,
    status: undefined,
    unread: false,
    isLoading: false,
    onClick: undefined,
};

export default Notification;
