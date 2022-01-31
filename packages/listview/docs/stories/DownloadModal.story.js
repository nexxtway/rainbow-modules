import React, { useState } from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Download } from '@rainbow-modules/icons';
import DownloadModal from '../../src/components/DownloadModal';
import app from '../../../../firebase';

export const DefaultDownloadModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = async (max, format) => {
        return [
            {
                name: 'Item 1',
                color: { R: 0, G: 255, B: 0 },
                size: 'X-Large',
                max,
                format,
            },
            { name: 'Item 2', color: 'Red', size: 'X-Medium', max, format },
            { name: 'Item 3', color: 'Blue', size: 'X-Small', max, format },
            { name: 'Item 4', color: 'Orange', size: 'S-Medium', max, format },
            { name: 'Item 5', color: 'Yellow', size: 'S-Small', max, format },
            { name: 'Item 6', color: 'Cyan', size: 'S-Large', max, format },
            { name: 'Item 7', color: 'Magenta', size: 'M-Small', max, format },
            { name: 'Item 8', color: 'Violet', size: 'M-Large', max, format },
            { name: 'Item 9', color: 'Brown', size: 'M-Medium', max, format },
        ];
    };

    return (
        <RainbowFirebaseApp app={app}>
            <ButtonIcon
                id="download-button-icon"
                variant="border"
                icon={<Download />}
                onClick={() => setIsOpen(true)}
                tooltip="Download"
            />
            <DownloadModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                maxEntries="500"
                onDownload={handleDownload}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Listview/Stories/DownloadModal',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
