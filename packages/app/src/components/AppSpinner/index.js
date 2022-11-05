import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { RenderIf, Spinner } from 'react-rainbow-components';
import SpinnerMessage from './message';
import { SpinnerContainer } from './styled';

const styles = {
    position: 'relative',
    top: 'unset',
    left: 'unset',
    display: 'inline-block',
    alignSelf: 'center',
    boxSizing: 'border-box',
    transform: 'unset',
};

const AppSpinner = (props) => {
    const { spinner, message } = props;
    if (spinner) {
        const extendedUserSpinner = React.cloneElement(spinner, { message });

        return createPortal(
            <SpinnerContainer data-cy="app-spinner">{extendedUserSpinner}</SpinnerContainer>,
            document.body,
        );
    }
    return createPortal(
        <SpinnerContainer data-cy="app-spinner">
            <Spinner style={styles} />
            <RenderIf isTrue={!!message}>
                <SpinnerMessage message={message} />
            </RenderIf>
        </SpinnerContainer>,
        document.body,
    );
};

AppSpinner.propTypes = {
    /** The spinner to show when the app is loading. */
    spinner: PropTypes.node,
    /** The label for the spinner. */
    message: PropTypes.node,
};

export default AppSpinner;
