import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import UpdateUserPhotoModal from '../../src/components/UpdateUserPhotoModal';
import app from '../../../../firebase';

export const basicUpdateUserPhotoModal = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <UpdateUserPhotoModal />
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
