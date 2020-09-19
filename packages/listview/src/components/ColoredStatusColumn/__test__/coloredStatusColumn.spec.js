import React from 'react';
import { mount } from 'enzyme';
import ColoredStatusColumn from '../index';

describe('<ColoredStatusColumn />', () => {
    it('should render a div with value = delivered', () => {
        const value = 'delivered';
        const colors = {
            delivered: '#009900',
        };
        const component = mount(<ColoredStatusColumn value={value} colors={colors} />);
        const div = component.find('div');
        expect(div.html().includes('delivered')).toBe(true);
    });
});
