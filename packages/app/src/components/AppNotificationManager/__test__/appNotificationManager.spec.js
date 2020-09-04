import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import AppNotificationManager from '..';

describe('AppNotificationManager', () => {
    it('should render in a portal', () => {
        const portalMockFn = jest.spyOn(ReactDOM, 'createPortal');
        shallow(<AppNotificationManager />);
        expect(portalMockFn).toHaveBeenCalledTimes(1);
    });
});
