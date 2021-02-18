import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Categories from '../categories';

describe('<Categories />', () => {
    it('should render the correct amount of options', () => {
        const wrapper = mount(
            <Application>
                <Categories options={['Cat 1', 'Cat 2', 'Cat 3']} />
            </Application>,
        );
        expect(wrapper.find('Option').length).toBe(3);
    });
});
