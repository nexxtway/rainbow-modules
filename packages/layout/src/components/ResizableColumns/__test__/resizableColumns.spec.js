import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import { act } from 'react-dom/test-utils';
import ResizableColumn from '..';
import { StyledDivider } from '../styled';

jest.useFakeTimers();

describe('<ResizableColumn />', () => {
    it('should set the initial width of the left column when value is positive', () => {
        const component = mount(
            <Application>
                <ResizableColumn initialDividerPosition={100} />
            </Application>,
        );
        jest.runAllTimers();
        const column = component.find(ResizableColumn).find('div').get(1);
        expect(column.ref.current.style.width).toBe('100px');
    });

    it('should set the initial width of the right column when value is negative', () => {
        const component = mount(
            <Application>
                <ResizableColumn initialDividerPosition={-100} />
            </Application>,
        );
        jest.runAllTimers();
        const column = component.find(ResizableColumn).find('div').get(3);
        expect(column.ref.current.style.width).toBe('100px');
    });

    it('should call onResize when finish resizing', () => {
        const map = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            map[event] = cb;
        });
        const resizeFn = jest.fn();
        const component = mount(
            <Application>
                <ResizableColumn initialDividerPosition={-100} onResize={resizeFn} />
            </Application>,
        );
        component.find(StyledDivider).simulate('mousedown');
        act(() => {
            map.mouseup();
        });
        expect(resizeFn).toHaveBeenCalledTimes(1);
    });

    it('should change column width on mouse move', () => {
        const map = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            map[event] = cb;
        });
        const component = mount(
            <Application>
                <ResizableColumn initialDividerPosition={50} />
            </Application>,
        );
        jest.runAllTimers();
        const column = component.find(ResizableColumn).find('div').get(1);
        component.find(StyledDivider).simulate('mousedown', { pageX: 90 });
        act(() => {
            map.mousemove({ pageX: 100 });
            map.mouseup();
        });
        expect(column.ref.current.style.width).toBe('60px');
    });
});
