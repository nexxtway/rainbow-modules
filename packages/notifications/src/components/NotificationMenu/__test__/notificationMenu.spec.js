import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import NotificationMenu from '..';
import Dropdown from '../dropdown';

describe('<NotificationMenu />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });

    it('should render a dropdown when button is clicked', () => {
        const wrapper = mount(
            <Application>
                <NotificationMenu />
            </Application>,
        );
        wrapper.find('button').simulate('click');
        expect(wrapper.find(Dropdown).exists()).toBe(true);
    });
});
