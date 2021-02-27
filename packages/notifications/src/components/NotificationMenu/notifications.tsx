import React from 'react';
import { NotificationsProps } from './types';
import Notification from './notification';
import EmptyMessage from './emptyMessage';

const Notifications: React.FC<NotificationsProps> = ({
    notifications,
    onClick,
    isLoading,
}: NotificationsProps) => {
    if (isLoading) {
        return (
            <>
                <Notification isLoading />
                <Notification isLoading />
            </>
        );
    }

    const children = notifications ? (
        notifications.map((props) => {
            const { id, title, description, createdAt, icon, status, unread } = props;
            return (
                <Notification
                    id={id}
                    title={title}
                    description={description}
                    createdAt={createdAt}
                    icon={icon}
                    status={status}
                    unread={unread}
                    onClick={onClick}
                    key={id}
                />
            );
        })
    ) : (
        <EmptyMessage />
    );
    return <>{children}</>;
};

export default Notifications;
