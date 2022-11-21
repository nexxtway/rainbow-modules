import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import UpdateUserPhotoModal from '../../src/components/UpdateUserPhotoModal';
import app from '../../../../firebase';

export const basicUpdateUserPhotoModal = () => {
    const defaultSrc = 'https://www.w3schools.com/howto/img_avatar.png';
    return (
        <RainbowFirebaseApp app={app}>
            <UpdateUserPhotoModal path={defaultSrc} />
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
