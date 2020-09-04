import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'react-rainbow-components';
import { StyledNotification } from './styled';
import ContentMetaResolver from './contentMetaResolver';

const AppNotification = (props) => {
    const { title, description, icon, timeout, onRequestClose } = props;
    const [shouldExit, setShouldExit] = useState(false);
    const [contentMeta, updateContentMeta] = useState(false);
    const [shown, setShown] = useState(false);

    const scheduleRemove = (removeTimeout = 600) =>
        setTimeout(() => {
            onRequestClose();
        }, removeTimeout);

    if (timeout) {
        setTimeout(() => {
            setShouldExit(true);
        }, timeout);
        scheduleRemove(timeout + 600);
    }

    const handleCloseRequest = () => {
        setShouldExit(true);
        scheduleRemove();
    };

    if (contentMeta) {
        const { height } = contentMeta;
        setTimeout(() => {
            setShown(true);
        }, 0);
        return (
            <StyledNotification
                height={height}
                shouldExit={shouldExit}
                shown={shown}
                data-cy="notification"
            >
                <Notification
                    title={title}
                    description={description}
                    icon={icon}
                    onRequestClose={handleCloseRequest}
                />
            </StyledNotification>
        );
    }

    return (
        <ContentMetaResolver onResolved={updateContentMeta}>
            <Notification
                title={title}
                description={description}
                icon={icon}
                onRequestClose={handleCloseRequest}
            />
        </ContentMetaResolver>
    );
};

AppNotification.propTypes = {
    /** The icon to show if it is passed. It is displayed in the left of the component.
     * It must be one of this values info, success, warning, error,
     * or any svg icon. */
    icon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    ]),
    /** The title that appears in the notification. */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description that appears in the notification. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when the close button is clicked. */
    onRequestClose: PropTypes.func,
    timeout: PropTypes.number,
};

AppNotification.defaultProps = {
    icon: null,
    title: null,
    description: null,
    onRequestClose: () => {},
    timeout: 2000,
};

export default AppNotification;
