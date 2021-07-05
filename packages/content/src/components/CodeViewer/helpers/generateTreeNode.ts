import { FileObject } from '../types';
import getIconForFile from './getIconForFile';
import getIconForFolder from './getIconForFolder';

const generateTreeNode = ({
    type,
    fileName,
    path,
    ...rest
}: FileObject & { path?: string }): Record<string, unknown> => {
    const data = {
        label: fileName,
        icon: getIconForFile(fileName),
        path: `${path}/${fileName}`,
    };

    if (type === 'folder') {
        return {
            ...data,
            icon: getIconForFolder(false),
            isLoading: false,
            isExpanded: false,
            children: [],
        };
    }

    return {
        ...rest,
        ...data,
    };
};

export default generateTreeNode;
