import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Spinner from 'react-rainbow-components/components/Spinner';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: black;
`;

const AppSpinner = (props) => {
    const { isLoading } = props;
    if (isLoading) {
        return createPortal(
            (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            ),
            document.body,
        );
    }    
    return null;
};

AppSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default AppSpinner;