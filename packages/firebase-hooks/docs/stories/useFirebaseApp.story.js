import React from 'react';
import styled from 'styled-components';
import { Button, RenderIf } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import useFirebaseApp from '../../src/useFirebaseApp';
import app from '../../../../firebase';
import useAuthState from '../../src/auth/useAuthState';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

const App = () => {
    const app = useFirebaseApp();
    const isAuth = useAuthState();
    const signIn = async () => {
        await signInAnonymously(getAuth(app));
    };

    return (
        <StyledContainer>
            <RenderIf isTrue={isAuth}>Signed in as anonymous</RenderIf>
            <RenderIf isTrue={!isAuth}>
                <Button onClick={signIn}>Sign in</Button>
            </RenderIf>
        </StyledContainer>
    );
};

export const UseFirebaseApp = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <App />
        </RainbowFirebaseApp>
    );
};
