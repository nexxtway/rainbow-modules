import React from 'react';
import { mount } from 'enzyme';
import AppNotification from '../notification';

jest.useFakeTimers();
jest.mock('../contentMetaResolver.js', () => {
    return {
        __esModule: true,
        default: (props) => {
            const { children } = props;
            return children;
        },
    };
});

describe('AppNotificationManager', () => {
    it('should fire onRequestClose callback', () => {
        const onRequestCloseFn = jest.fn();
        const component = mount(
            <AppNotification
                title="Test"
                description="Test"
                onRequestClose={onRequestCloseFn}
                timeout={null}
            />,
        );
        component.find('button').simulate('click');
        jest.runAllTimers();
        expect(onRequestCloseFn).toHaveBeenCalledTimes(1);
    });
});
