import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { WhenAuthenticated } from '@rainbow-modules/auth';
import { Spinner } from 'react-rainbow-components';
import { getAuth, signInAnonymously } from 'firebase/auth';
import app from '../../../../firebase';
import useUserClaims from '../../src/auth/useUserClaims';

const initialize = async () => {
    try {
        await signInAnonymously(getAuth(app));
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.toString());
    }
};

const UserClaims = () => {
    const [claims, isLoading] = useUserClaims();
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <h2>
            Your user claims:
            <pre>
                <code>{JSON.stringify(claims, null, 2)}</code>
            </pre>
        </h2>
    );
};

export const gettingUserClaims = () => {
    return (
        <RainbowFirebaseApp app={app} initialize={initialize}>
            <WhenAuthenticated path="/">
                <h1>You are authenticated anonymously!</h1>
                <UserClaims />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
