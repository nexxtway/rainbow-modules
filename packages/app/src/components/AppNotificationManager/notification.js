import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledNotification } from './styled';
import ContentMetaResolver from './contentMetaResolver';

const Notification = (props) => {
    const { notification, timeout } = props;
    const [shouldExit, setShouldExit] = useState(false);
    const [contentMeta, updateContentMeta] = useState(false);
    const [shown, setShown] = useState(false);

    if (timeout) {
        setTimeout(() => {
            setShouldExit(true);
        }, timeout);
    }

    if (contentMeta) {
        const { height } = contentMeta;
        setTimeout(() => {
            setShown(true);
        }, 0);
        return (
            <StyledNotification height={height} shouldExit={shouldExit} shown={shown}>
                {notification}
            </StyledNotification>
        );
    }

    return <ContentMetaResolver onResolved={updateContentMeta}>{notification}</ContentMetaResolver>;
};

Notification.propTypes = {
    notification: PropTypes.node,
    timeout: PropTypes.number,
};

Notification.defaultProps = {
    notification: null,
    timeout: undefined,
};

export default Notification;
