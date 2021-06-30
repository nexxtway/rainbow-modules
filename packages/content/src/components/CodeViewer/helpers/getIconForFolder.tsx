import React from 'react';
import { FolderOpen, FolderClose } from '../icons';

const getIconForFolder = (isExpanded: boolean): React.ReactNode => {
    return isExpanded ? <FolderOpen /> : <FolderClose />;
};

export default getIconForFolder;
