import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Notifications from '../notifications';
import Notification from '../notification';
import EmptyMessage from '../emptyMessage';

describe('<Notifications />', () => {
    it('should render loading notifications when isLoading is true', () => {
        const wrapper = mount(
            <Application>
                <Notifications isLoading />
            </Application>,
        );
        const notifications = wrapper.find(Notification);
        expect(notifications.length).toBe(2);
        notifications.forEach((element) => {
            expect(element.prop('isLoading')).toBe(true);
        });
    });

    it('should render an EmpryMessage when there are no notifications', () => {
        const wrapper = mount(
            <Application>
                <Notifications />
            </Application>,
        );
        expect(wrapper.find(EmptyMessage).exists()).toBe(true);
    });

    it('should render the correct number of notifications', () => {
        const notifications = [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
        ];
        const wrapper = mount(
            <Application>
                <Notifications notifications={notifications} />
            </Application>,
        );
        expect(wrapper.find(Notification).length).toBe(3);
    });
});
