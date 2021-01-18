import React, { useEffect, useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';

const initialize = async () => {
    try {
        await app.auth().signInAnonymously();
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.toString());
    }
};

const UserId = () => {
    const [uid, setUid] = useState();
    useEffect(() => {
        setUid(app.auth().currentUser.uid);
    }, []);
    return (
        <h2>
            Your uid is:
            <b>{uid}</b>
        </h2>
    );
};

export const loginAnonymously = () => {
    return (
        <RainbowFirebaseApp app={app} initialize={initialize}>
            <WhenAuthenticated path="/">
                <h1>You are authenticated anonymously!</h1>
                <UserId />
                <p>
                    Firebase docs here:
                    <a href="https://firebase.google.com/docs/auth/web/anonymous-auth">
                        https://firebase.google.com/docs/auth/web/anonymous-auth
                    </a>
                </p>
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
