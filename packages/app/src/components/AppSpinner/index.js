import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import Spinner from 'react-rainbow-components/components/Spinner';
import SpinnerMessage from './message';
import { ZINDEX_SPINNER } from '../../styles/zIndex';

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    flex: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(239, 241, 245, 0.9);
    z-index: ${ZINDEX_SPINNER};
    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: rgba(239, 241, 245, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
`;

const StyledSpinner = styled(Spinner)`
    position: relative;
    top: unset;
    left: unset;
    display: inline-block;
    align-self: center;
    box-sizing: border-box;
    transform: unset;
`;

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
            <StyledSpinner />
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
