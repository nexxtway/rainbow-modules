import React from 'react';
import styled from 'styled-components';
import { Button, RenderIf } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import useAuthState from '../../src/auth/useAuthState';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

const AuthApp = () => {
    const isAuth = useAuthState();

    const signIn = async () => {
        await app.auth().signInAnonymously();
    };

    const signOut = async () => {
        await app.auth().signOut();
    };

    return (
        <StyledContainer>
            <RenderIf isTrue={isAuth}>
                <h3>Welcome</h3>
                <Button onClick={signOut}>Sign out</Button>
            </RenderIf>
            <RenderIf isTrue={!isAuth}>
                <h3>You are not logged in</h3>
                <Button onClick={signIn}>Sign in</Button>
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
