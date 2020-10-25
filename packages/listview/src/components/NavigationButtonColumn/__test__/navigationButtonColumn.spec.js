import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import NavigationButtonColumn from '../index';

describe('<NavigationButtonColumn />', () => {
    it('should call onClickMockFn when click on the button', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <Application>
                <NavigationButtonColumn value="a" onClick={onClickMockFn} />
            </Application>,
        );
        const button = component.find('button');
        button.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
});
