import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { RainbowLogo } from '@rainbow-modules/icons';
import CodeViewer from '../../src/components/CodeViewer';

const dir = {
    fileName: '/',
    type: 'folder',
    children: [
        {
            fileName: 'helpers',
            type: 'folder',
            children: [
                {
                    fileName: 'subfolder',
                    type: 'folder',
                    children: [
                        {
                            fileName: 'helpers.ts',
                            type: 'file',
                        },
                    ],
                },
                {
                    fileName: 'index.ts',
                    type: 'file',
                },
            ],
        },
        {
            fileName: 'icons',
            type: 'folder',
            children: [
                {
                    fileName: 'app.svg',
                    type: 'file',
                },
            ],
        },
        {
            fileName: 'index.ts',
            type: 'file',
        },
        {
            fileName: 'types.ts',
            type: 'file',
        },
        {
            fileName: 'config.json',
            type: 'file',
        },
        {
            fileName: 'package.json',
            type: 'file',
        },
        {
            fileName: 'yarn.lock',
            type: 'file',
        },
        {
            fileName: 'readme.md',
            type: 'file',
        },
    ],
};

const code = `function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
    }, {});
}

function createClassNameString(classNames) {
    return classNames.join(' ');
}`;

const Container = styled.div`
    height: 90vh;
`;

export const CodeViewerExample = () => {
    const onFolderExpand = async ({ folderPath }) => {
        let folder = dir;
        folderPath.split('/').forEach((item) => {
            if (!item || !folder) return;
            folder = folder.children.find((file) => file.fileName === item);
        });
        if (!folder || !Array.isArray(folder.children)) return [];
        const files = folder.children.map((item) => ({
            ...item,
        }));
        return {
            files,
        };
    };

    const onFileSelect = () => {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        content: code,
                    }),
                1500,
            );
        });
    };

    return (
        <RainbowFirebaseApp>
            <Container>
                <CodeViewer
                    icon={<RainbowLogo />}
                    name="<CodeViewer />"
                    onFolderExpand={onFolderExpand}
                    onFileSelect={onFileSelect}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Content/Stories/CodeViewer',
};
