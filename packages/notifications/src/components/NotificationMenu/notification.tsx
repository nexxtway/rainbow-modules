import React from 'react';
import { useIntl } from 'react-intl';
import { LoadingShape, RenderIf } from 'react-rainbow-components';
import getTimeDiff from './helpers/getTimeDiff';
import normalizeCreatedAt from './helpers/normalizeCreatedAt';
import Icon from './icons';
import messages from './messages';
import {
    Content,
    CreatedAt,
    Description,
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
    createdAt: createdAtInProps,
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
            <Icon icon={status as string} />
            {badgeText}
        </StatusBadge>
    ) : (
        status
    );

    const normalizedCreatedAt = normalizeCreatedAt(createdAtInProps);
    const createdAt = normalizedCreatedAt
        ? intl.formatRelativeTime(...getTimeDiff(normalizedCreatedAt))
        : null;

    const handleClick = () => {
        if (onClick) {
            onClick({
                id,
                title,
                description,
                createdAt: createdAtInProps,
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
                    <RenderIf isTrue={createdAt}>
                        <CreatedAt unread={unread}>{createdAt}</CreatedAt>
                    </RenderIf>
                </TitleContainer>
                <Description unread={unread} value={description} variant="inline" />
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
