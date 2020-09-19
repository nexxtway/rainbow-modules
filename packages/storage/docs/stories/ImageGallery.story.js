import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import ImageGallery from '../../src/components/ImageGallery';
import app from '../../../../firebase';

export const basicStorageImageGallery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <ImageGallery path="/users/u123/gallery" allowUpload />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Storage/Stories',
    component: ImageGallery,
};
