import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from 'react-rainbow-components';
import DoubleBarChart from '..';

describe('<DoubleBarChart />', () => {
    it('should render a Chart with type `bar`', () => {
        const titles = ['Test 1', 'Test 2'];
        const data = [
            { label: '1', values: [50, 75] },
            { label: '2', values: [75, 90] },
            { label: '3', values: [95, 100] },
        ];
        const wrapper = shallow(<DoubleBarChart titles={titles} data={data} />);
        const chart = wrapper.find(Chart);
        expect(chart.exists()).toBe(true);
        expect(chart.prop('type')).toBe('bar');
    });

    it('should pass the correct labels to the Chart component', () => {
        const titles = ['Test 1', 'Test 2'];
        const data = [
            { label: '1', values: [50, 75] },
            { label: '2', values: [75, 90] },
            { label: '3', values: [95, 100] },
        ];
        const wrapper = shallow(<DoubleBarChart titles={titles} data={data} />);
        const chart = wrapper.find(Chart);
        expect(chart.prop('labels')).toEqual(['1', '2', '3']);
    });

    it('should pass the correct values to each dataset', () => {
        const titles = ['Test 1', 'Test 2'];
        const data = [
            { label: '1', values: [50, 75] },
            { label: '2', values: [75, 90] },
            { label: '3', values: [95, 100] },
        ];
        const wrapper = shallow(<DoubleBarChart titles={titles} data={data} />);
        const datasets = wrapper.find('Dataset');
        expect(datasets.length).toBe(2);
        expect(datasets.at(0).prop('values')).toEqual([50, 75, 95]);
        expect(datasets.at(1).prop('values')).toEqual([75, 90, 100]);
    });
});
