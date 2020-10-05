import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import ImageGallery from '../../src/components/ImageGallery';
import app from '../../../../firebase';

export const basicStorageImageGallery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <ImageGallery
                path="/users/u123/gallery"
                allowUpload
                allowDelete
                // eslint-disable-next-line no-alert
                onSelect={(imageRef) => alert(imageRef.name)}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Storage/Stories',
    component: ImageGallery,
};
