import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import openUpdateUserPhotoModal from '../../src/actions/openUpdateUserPhotoModal';
import app from '../../../../firebase';

export const basicStorageImageGallery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <button type="button" onClick={() => openUpdateUserPhotoModal()}>
                click me
            </button>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Storage/Stories/openUpdateUserPhotoModal',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
