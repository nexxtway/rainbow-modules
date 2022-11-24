import React, { useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import {
    WhenAuthenticated,
    WhenNoAuthenticated,
    EmailPasswordSignInForm,
} from '@rainbow-modules/auth';
import UpdateUserPhotoModal from '../../src/components/UpdateUserPhotoModal';
import app from '../../../../firebase';

export const basicUpdateUserPhotoModal = () => {
    const [photoURL, setPhotoURL] = useState('');
    console.log(photoURL);
    
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <EmailPasswordSignInForm />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <UpdateUserPhotoModal photoURL={photoURL} onChangePhotoUrl={ setPhotoURL } />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Storage/Stories/UpdateUserPhotoModal',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
