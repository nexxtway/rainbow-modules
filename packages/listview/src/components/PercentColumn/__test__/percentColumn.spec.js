import React from 'react';
import { mount } from 'enzyme';
import PercentColumn from '../index';
import { StyledCellContainer } from '../styled';

describe('<PercentColumn />', () => {
    it('should render a PercentColumn with the value passed', () => {
        const wrapper = mount(<PercentColumn value={1} />);
        const output = wrapper.find(StyledCellContainer);
        expect(output.exists()).toBe(true);
        expect(output.text()).toBe('100%');
    });

    it('should render a PercentColumn with the value passed and intl options', () => {
        const wrapper = mount(
            <PercentColumn value={0.5025} minimumFractionDigits={1} maximumFractionDigits={2} />,
        );
        const output = wrapper.find(StyledCellContainer);
        expect(output.exists()).toBe(true);
        expect(output.text()).toBe('50.25%');
    });

    it('should render a center text whne cellAlignment is center', () => {
        const wrapper = mount(<PercentColumn value={1} cellAlignment="center" />);
        const output = wrapper.find(StyledCellContainer);
        expect(output.exists()).toBe(true);
        expect(output.prop('cellAlignment')).toBe('center');
    });
});
