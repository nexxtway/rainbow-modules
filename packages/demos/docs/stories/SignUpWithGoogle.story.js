import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Button } from 'react-rainbow-components';
import SignUpWithGoogle from '../../src/components/SignUpWithGoogle';
import firebase from '../../../../firebase';

export const Basic = () => {
    const auth = getAuth(firebase);
    const logout = () => {
        return signOut(auth);
    };

    return (
        <RainbowFirebaseApp app={firebase}>
            <SignUpWithGoogle header="Google Sign Up">
                <span className="rainbow-m-right_medium">authenticated</span>
                <Button label="Logout" onClick={logout} />
            </SignUpWithGoogle>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Demos/Stories/SignUpWithGoogle',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
