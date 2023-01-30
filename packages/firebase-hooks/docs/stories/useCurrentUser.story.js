import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { WhenAuthenticated } from '@rainbow-modules/auth';
import { getAuth, signInAnonymously } from 'firebase/auth';
import app from '../../../../firebase';
import useCurrentUser from '../../src/auth/useCurrentUser';

const initialize = async () => {
    try {
        await signInAnonymously(getAuth(app));
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.toString());
    }
};

const UserId = () => {
    const { uid } = useCurrentUser();
    return (
        <h2>
            Your uid is:
            <b>{uid}</b>
        </h2>
    );
};

export const gettingCurrentUser = () => {
    return (
        <RainbowFirebaseApp app={app} initialize={initialize}>
            <WhenAuthenticated path="/">
                <h1>You are authenticated anonymously!</h1>
                <UserId />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
