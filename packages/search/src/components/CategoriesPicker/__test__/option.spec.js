import React from 'react';
import { mount } from 'enzyme';
import Option from '../option';
import { StyledCloseIcon } from '../styled';
import { Application } from 'react-rainbow-components';

describe('<Option />', () => {
    it('should render a close icon when isSelected is true', () => {
        const wrapper = mount(
            <Application>
                <Option isSelected />
            </Application>,
        );
        expect(wrapper.find(StyledCloseIcon).exists()).toBe(true);
    });
});
