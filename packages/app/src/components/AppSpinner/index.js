import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { RenderIf, Spinner } from 'react-rainbow-components';
import { ZINDEX_SPINNER } from '../../styles/zIndex';
import SpinnerMessage from './message';

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(239, 241, 245, 0.64);
    backdrop-filter: blur(5px);
    z-index: ${ZINDEX_SPINNER};
`;

const AppSpinner = (props) => {
    const { spinner, message } = props;
    if (spinner) {
        return createPortal(
            <SpinnerContainer data-cy="app-spinner">
                {spinner}
                <RenderIf isTrue={!!message}>
                    <SpinnerMessage message={message} />
                </RenderIf>
            </SpinnerContainer>,
            document.body,
        );
    }
    return createPortal(
        <SpinnerContainer data-cy="app-spinner">
            <Spinner />
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
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default AppSpinner;
