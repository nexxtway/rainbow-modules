import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { showAppMessage, hideAppMessage } from '@rainbow-modules/app';
import { WhenNoAuthenticated, WhenAuthenticated } from '@rainbow-modules/auth';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { RenderIf } from 'react-rainbow-components';
import firebase from 'firebase';
import { Container, HeaderContainer, Title, StyledButton, GoogleIcon } from './styled';

const Header = ({ content }) => {
    if (typeof content === 'string') {
        return <Title>{content}</Title>;
    }
    return content;
};

const SignUpWithGoogle = ({ header, children }) => {
    const [isLoading, setLoading] = useState(false);
    const app = useFirebaseApp();

    const loginWithGoogle = async () => {
        hideAppMessage();
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await app.auth().signInWithPopup(provider);
        } catch (error) {
            showAppMessage({
                variant: 'error',
                message: error.message || error.toString(),
            });
        }
        setLoading(false);
    };

    return (
        <>
            <WhenNoAuthenticated path="/" redirect="/app">
                <Container>
                    <RenderIf isTrue={header}>
                        <HeaderContainer>
                            <Header content={header} />
                        </HeaderContainer>
                    </RenderIf>
                    <StyledButton
                        variant="border-filled"
                        onClick={loginWithGoogle}
                        shaded
                        isLoading={isLoading}
                    >
                        <GoogleIcon />
                        Sign in with Google
                    </StyledButton>
                </Container>
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                {children}
            </WhenAuthenticated>
        </>
    );
};

SignUpWithGoogle.propTypes = {
    /** The header can include text or a component,
     * and is displayed at the top of the component. */
    header: PropTypes.node,
    /** The content to show when the user is authenticated. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

SignUpWithGoogle.defaultProps = {
    header: undefined,
    children: undefined,
};

export default SignUpWithGoogle;
