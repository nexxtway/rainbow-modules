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
    z-index: 1000000;
`;

const AppSpinner = (props) => {
    const {
        isLoading,
        className,
        style,
        assistiveText,
        isVisible,
        size,
        variant,
        type,
        children,
    } = props;
    if (isLoading) {
        return createPortal(
            <SpinnerContainer data-cy="app-spinner">
                <Spinner
                    className={className}
                    style={style}
                    assistiveText={assistiveText}
                    isVisible={isVisible}
                    size={size}
                    variant={variant}
                    type={type}
                >
                    {children}
                </Spinner>
            </SpinnerContainer>,
            document.body,
        );
    }
    return null;
};

AppSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    /** The variant changes the appearance of the spinner.
     * Accepted variants are base, brand, and inverse. This value defaults to base. */
    variant: PropTypes.oneOf(['base', 'brand', 'inverse', 'neutral']),
    /** The size of the spinner. Accepted sizes are xx-small, x-small, small, medium, large and x-large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
    /** Show/Hide the spinner. */
    isVisible: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The type of the spinner. Accepted types are circle and arc.
     * This value defaults to circle. */
    type: PropTypes.oneOf(['circle', 'arc']),
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

export default AppSpinner;
