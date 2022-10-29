import React from 'react';
import { mount } from 'enzyme';
import CurrencyColumn from '../index';

describe('<CurrencyColumn />', () => {
    it('should render a CurrencyColumn with the value passed', () => {
        const wrapper = mount(<CurrencyColumn value={1} />);
        const output = wrapper.find('span');
        expect(output.exists()).toBe(true);
        expect(output.text()).toBe('$1.00');
    });

    it('should render a CurrencyColumn with the value passed and intl options', () => {
        const wrapper = mount(
            <CurrencyColumn value={5025} currency="EUR" currencyDisplay="name" />,
        );
        const output = wrapper.find('span');
        expect(output.exists()).toBe(true);
        expect(output.text()).toBe('5,025.00 euros');
    });
});
