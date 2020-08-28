import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { updateAppActions } from '../../actions';
import { StyledNotificationContainer } from './styled';
import Notification from './notification';
import uniqueId from './utils/uniqueId';

const AppNotificationManager = () => {
    const [notifications, setNotifications] = useState([]);

    const removeNotification = (notification) => {
        setNotifications((notifications) => {
            return notifications.filter((item) => {
                return item.notification !== notification;
            });
        });
    };

    const addNotification = (notification, timeout) => {
        const key = uniqueId('notification');
        /*
        const newNotification = (
            <Notification key={key} notification={notification} timeout={timeout} />
        );
        setNotifications([newNotification, ...notifications]);
        */
        setNotifications([{ key, notification, timeout }, ...notifications]);
        if (timeout && timeout > 0) {
            setTimeout(() => {
                // removeNotification(newNotification);
                removeNotification(notification);
            }, timeout + 600);
        }
    };

    useEffect(() => {
        updateAppActions({
            addNotification,
            removeNotification,
        });
    });

    const children = notifications.map((n) => {
        const { key, notification, timeout } = n;
        return <Notification key={key} notification={notification} timeout={timeout} />;
    });
    return createPortal(
        <StyledNotificationContainer>{children}</StyledNotificationContainer>,
        document.body,
    );
};

AppNotificationManager.propTypes = {};

export default AppNotificationManager;
