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
`;

export const StyledNotification = styled.div`
    overflow: hidden;
    z-index: 10;
    transition-property: height, transform, margin-top, z-index;
    transition-duration: 0.2s, 0.4s, 0.4s, 0s;
    transition-delay: 0s, 0.2s, 0s, 0s;

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
        margin-top: -18%;
        transform: scale(0.95);
        z-index: 5;
    }

    :nth-child(5) {
        margin-top: -19%;
        transform: scale(0.9);
        z-index: 1;
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

/*
export const StyledNotification = styled.div`
    @keyframes enter {
        0% {
            transform: translateX(100%);
            height: 0;
        }
        25% {
            transform: translateX(100%);
            height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
        }
        100% {
            transform: translateX(0%);
            height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
        }
    }

    @keyframes exit {
        0% {
            transform: translateX(0%);
            height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
        }
        75% {
            transform: translateX(100%);
            height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
        }
        100% {
            transform: translateX(100%);
            height: 0;
        }
    }

    animation-name: ${(props) => (props.shouldExit ? 'exit' : 'enter')};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    overflow: hidden;
    z-index: 10000;
    transition-property: transform, margin-top;

    :nth-child(3) {
        transform: translateX(0%);
        height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
        transition-duration: 0s;
    }

    :nth-child(4) {
        margin-top: -18%;
        animation-fill-mode: ${(props) => (props.shouldExit ? 'forwards' : 'none')};
        transform: scale(0.95);
        z-index: 9999;
    }

    :nth-child(5) {
        margin-top: -19%;
        animation-fill-mode: ${(props) => (props.shouldExit ? 'forwards' : 'none')};
        transform: scale(0.9);
        z-index: 9998;
    }
    :nth-child(n + 6) {
        margin-top: -19%;
        visibility: hidden;
        transform: scale(0.9);
        z-index: 9997;
        animation-fill-mode: ${(props) => (props.shouldExit ? 'forwards' : 'none')};
    }
`;
*/
