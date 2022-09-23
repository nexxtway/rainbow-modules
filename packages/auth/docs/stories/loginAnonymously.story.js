import React, { useEffect, useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { useCurrentUser } from '@rainbow-modules/firebase-hooks';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import getAuth from '../../src/helpers/getAuth';

const initialize = async (auth) => {
    try {
        await signInAnonymously(auth);
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.toString());
    }
};

const UserId = () => {
    const [uid, setUid] = useState();
    const currentUser = useCurrentUser();
    useEffect(() => {
        setUid(currentUser.uid);
    }, [currentUser]);
    return (
        <h2>
            Your uid is:
            <b>{uid}</b>
        </h2>
    );
};

export const loginAnonymously = () => {
    const auth = getAuth(app);
    return (
        <RainbowFirebaseApp app={app} initialize={() => initialize(auth)}>
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
