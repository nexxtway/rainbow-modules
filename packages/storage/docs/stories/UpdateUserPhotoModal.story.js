import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import {
    WhenAuthenticated,
    WhenNoAuthenticated,
    EmailPasswordSignInForm,
} from '@rainbow-modules/auth';
import UpdateUserPhotoModal from '../../src/components/UpdateUserPhotoModal';
import app from '../../../../firebase';

export const basicUpdateUserPhotoModal = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <EmailPasswordSignInForm />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <UpdateUserPhotoModal />
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
