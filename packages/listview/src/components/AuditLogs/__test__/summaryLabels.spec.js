import React from 'react';
import { mount } from 'enzyme';
import SummaryLabels from '../summaryLabels';

describe('<SummaryLabels/>', () => {
    it('should return null when labels is undefined', () => {
        const component = mount(<SummaryLabels />);
        expect(component.html()).toBeNull();
    });
    it('should render the label with value1', () => {
        const labels = {
            label1: 'value1',
        };
        const component = mount(<SummaryLabels labels={labels} />);
        expect(component.html().includes('value1')).toBe(true);
    });
});
