import React from 'react';
import { mount } from 'enzyme';
import SourceTree from '../sourceTree';
import Loader from '../loader';

describe('<SourceTree />', () => {
    it('should render a Loader when isLoading is true', () => {
        const component = mount(<SourceTree isLoading />);
        expect(component.find(Loader).exists()).toBe(true);
    });

    it('should render the icon passed', () => {
        const component = mount(<SourceTree icon={<svg data-test="" />} />);
        expect(component.find('svg[data-test]').exists()).toBe(true);
    });

    it('should render the name passed', () => {
        const component = mount(<SourceTree name={<span data-test="" />} />);
        expect(component.find('span[data-test]').exists()).toBe(true);
    });

    it('should render a Tree with the data passed', () => {
        const data = [
            {
                label: 'Test',
            },
        ];
        const component = mount(<SourceTree data={data} />);
        expect(component.find('Tree').prop('data')).toEqual(data);
    });
});
