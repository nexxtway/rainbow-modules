import React from 'react';
import { mount } from 'enzyme';
import Message from '../index';

describe('App Message', () => {
    it('should not render Message when isVisible is not passed', () => {
        const component = mount(<Message />);
        expect(component.find('Message').exists()).toBe(false);
    });
    // TODO: add helper to resolve theme when no Application used as in react-rainbow
    it.skip('should render Message when isVisible is passed', () => {
        const component = mount(<Message isVisible />);
        expect(component.find('Message').exists()).toBe(true);
    });
});
