import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Application } from 'react-rainbow-components';
import CodeViewer from '..';
import { Container, LeftColumn } from '../styled';

describe('<CodeViewer />', () => {
    it('should call onFolderExpand on initialisation', () => {
        const onFolderExpandFn = jest.fn(() =>
            Promise.resolve({
                files: [
                    {
                        fileName: 'folder',
                        type: 'folder',
                    },
                ],
            }),
        );
        mount(
            <Application>
                <CodeViewer onFolderExpand={onFolderExpandFn} />
            </Application>,
        );
        return new Promise((resolve) => setImmediate(resolve)).then(() => {
            expect(onFolderExpandFn).toHaveBeenCalledWith({ folderPath: '/' });
        });
    });

    it('should call onFolderExpand when a folder is expanded', async () => {
        const onFolderExpandFn = jest.fn(() =>
            Promise.resolve({
                files: [
                    {
                        fileName: 'folder',
                        type: 'folder',
                    },
                ],
            }),
        );
        const component = mount(
            <Application>
                <CodeViewer onFolderExpand={onFolderExpandFn} />
            </Application>,
        );
        return new Promise((resolve) => setImmediate(resolve)).then(() => {
            component.update();
            component.find('button[data-id="button-icon-element"]').simulate('click');

            expect(onFolderExpandFn).toHaveBeenCalledTimes(2);
        });
    });

    it('should call onFileSelect when a file is clicked', async () => {
        const onFileSelectFn = jest.fn(() => ({
            content: '',
        }));
        const onFolderExpandFn = jest.fn(() =>
            Promise.resolve({
                files: [
                    {
                        fileName: 'file',
                        type: 'file',
                    },
                ],
            }),
        );
        const component = mount(
            <Application>
                <CodeViewer onFolderExpand={onFolderExpandFn} onFileSelect={onFileSelectFn} />
            </Application>,
        );
        return new Promise((resolve) => setImmediate(resolve)).then(() => {
            component.update();
            component.find('li[data-id="node-element-li"]').simulate('click');

            expect(onFileSelectFn).toHaveBeenCalledWith({ filePath: '/file' });
        });
    });

    it('should toggle fullscreen when fullscreen button is clicked', () => {
        const component = mount(
            <Application>
                <CodeViewer />
            </Application>,
        );
        expect(component.find(Container).prop('isFullScreen')).toBe(false);
        component.find('button[aria-label="Toggle fullscreen"]').simulate('click');
        expect(component.find(Container).prop('isFullScreen')).toBe(true);
        component.find('button[aria-label="Toggle fullscreen"]').simulate('click');
        expect(component.find(Container).prop('isFullScreen')).toBe(false);
    });

    it('should close fullscreen when Escape key is pressed', () => {
        const map = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            map[event] = cb;
        });
        const component = mount(
            <Application>
                <CodeViewer />
            </Application>,
        );
        component.find('button[aria-label="Toggle fullscreen"]').simulate('click');
        expect(component.find(Container).prop('isFullScreen')).toBe(true);
        act(() => {
            map.keydown({ key: 'Escape' });
        });
        component.update();
        expect(component.find(Container).prop('isFullScreen')).toBe(false);
    });

    it('should toggle the left column when toggle source explorer button is clicked', () => {
        const component = mount(
            <Application>
                <CodeViewer />
            </Application>,
        );
        expect(component.find(LeftColumn).exists()).toBe(true);
        component.find('button[aria-label="Toggle source explorer"]').simulate('click');
        expect(component.find(LeftColumn).exists()).toBe(false);
        component.find('button[aria-label="Toggle source explorer"]').simulate('click');
        expect(component.find(LeftColumn).exists()).toBe(true);
    });
});
