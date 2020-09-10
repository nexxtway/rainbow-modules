import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { updateAppActions } from '../../actions';
import { StyledNotificationContainer } from './styled';
import AppNotification from './notification';
import uniqueId from './utils/uniqueId';

const AppNotificationManager = () => {
    const [notifications, setNotifications] = useState([]);

    const removeNotification = (key) => {
        setNotifications((notifications) => notifications.filter((item) => item.key !== key));
    };

    const addNotification = (notification) => {
        const key = uniqueId('notification');
        setNotifications((notifications) => [{ key, ...notification }, ...notifications]);
    };

    useEffect(() => {
        updateAppActions({
            addNotification,
        });
    }, []);

    const children = notifications.map((n) => {
        const { key, title, description, icon, timeout } = n;
        return (
            <AppNotification
                key={key}
                title={title}
                description={description}
                icon={icon}
                onRequestClose={() => removeNotification(key)}
                timeout={timeout}
            />
        );
    });
    return createPortal(
        <StyledNotificationContainer>{children}</StyledNotificationContainer>,
        document.body,
    );
};

AppNotificationManager.propTypes = {};

export default AppNotificationManager;
