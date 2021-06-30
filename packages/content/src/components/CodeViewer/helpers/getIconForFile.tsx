import React from 'react';
import { JavascriptFile, SvgFile, JsonFile } from '@rainbow-modules/icons';
import { UnknownFile } from '../icons';
import getFileExtension from './getFileExtension';

const extensionIconMap: Record<string, React.ReactNode> = {
    js: <JavascriptFile />,
    ts: <JavascriptFile />,
    json: <JsonFile />,
    svg: <SvgFile />,
};

const getIconForFile = (fileName: string): React.ReactNode => {
    const fileExtension = getFileExtension(fileName);
    return extensionIconMap[fileExtension] || <UnknownFile />;
};

export default getIconForFile;
