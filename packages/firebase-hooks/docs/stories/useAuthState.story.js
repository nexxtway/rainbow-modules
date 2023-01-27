import React from 'react';
import styled from 'styled-components';
import { Button, RenderIf } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { signInAnonymously, signOut } from 'firebase/auth';
import app from '../../../../firebase';
import useAuthState from '../../src/auth/useAuthState';
import useAuth from '../../src/auth/useAuth';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

const AuthApp = () => {
    const auth = useAuth();
    const isAuth = useAuthState();

    const handleSignIn = async () => {
        await signInAnonymously(auth);
    };

    const handleSignOut = async () => {
        await signOut(auth);
    };

    return (
        <StyledContainer>
            <RenderIf isTrue={isAuth}>
                <h3>Welcome</h3>
                <Button onClick={handleSignOut}>Sign out</Button>
            </RenderIf>
            <RenderIf isTrue={!isAuth}>
                <h3>You are not logged in</h3>
                <Button onClick={handleSignIn}>Sign in</Button>
            </RenderIf>
        </StyledContainer>
    );
};

export const UseAuthState = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <AuthApp />
        </RainbowFirebaseApp>
    );
};
