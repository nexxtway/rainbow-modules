import styled from 'styled-components';

export const StyledNotificationContainer = styled.div`
    position: fixed;
    top: 16px;
    right: 0;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    pointer-events: none;
`;

export const StyledNotification = styled.div`
    overflow: hidden;
    z-index: 10;
    transition-property: height, transform, margin-top, z-index;
    transition-duration: 0.2s, 0.4s, 0.4s, 0s;
    transition-delay: 0s, 0.2s, 0s, 0s;
    margin-bottom: 0.5rem;
    pointer-events: initial;

    :nth-child(2) {
        z-index: 9;
    }

    :nth-child(3) {
        transition-property: height, transform, margin-top, z-index;
        transition-duration: 0.2s, 0.4s, 0.4s, 0s;
        transition-delay: 0s, 0.2s, 0s, 0s;
        z-index: 8;
    }

    :nth-child(4) {
        transition-property: height, transform, margin-top, z-index;
        transition-duration: 0.2s, 0.4s, 0.4s, 0s;
        transition-delay: 0s, 0.2s, 0s, 0s;
        margin-top: -21%;
        transform: scale(0.95);
        z-index: 5;
        height: 68px;
        text-indent: -1000em;
    }

    :nth-child(5) {
        margin-top: -21%;
        transform: scale(0.9);
        z-index: 1;        
        height: 68px;
        text-indent: -1000em;
    }

    :nth-child(n+6) {
        display: none;
    }

    /* Initial state */
    transform: translateX(100%);
    height: 0;

    /* Shown state */
    ${(props) =>
        props.shown &&
        `
        transform: translateX(0%);
        height: ${props.height}px;
        `}

    /* Exit state */
    ${(props) =>
        props.shouldExit &&
        `
        transition-property: height, transform, margin-top, z-index;
        transition-duration: 0.2s, 0.4s, 0.4s, 0s;
        transition-delay: 0.4s, 0s, 0s, 0.6s;
        transform: translateX(100%);
        height: 0;
        `}
`;
