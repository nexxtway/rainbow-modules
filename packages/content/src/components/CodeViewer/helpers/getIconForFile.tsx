import React from 'react';
import {
    JavascriptFile,
    SvgFile,
    JsonFile,
    YarnLockFile,
    ReadmeFile,
    NodeFile,
} from '@rainbow-modules/icons';
import { UnknownFile } from '../icons';
import getFileExtension from './getFileExtension';
import isSpecialFile from './isSpecialFile';

const specialFileNamesMap: Record<string, React.ReactNode> = {
    'yarn.lock': <YarnLockFile />,
    'readme.md': <ReadmeFile />,
    'package.json': <NodeFile />,
};

const extensionIconMap: Record<string, React.ReactNode> = {
    js: <JavascriptFile />,
    ts: <JavascriptFile />,
    json: <JsonFile />,
    svg: <SvgFile />,
};

const getIconForFile = (fileName: string): React.ReactNode => {
    if (isSpecialFile(fileName)) {
        return specialFileNamesMap[fileName.toLowerCase()] || <UnknownFile />;
    }

    const fileExtension = getFileExtension(fileName);
    return extensionIconMap[fileExtension] || <UnknownFile />;
};

export default getIconForFile;
