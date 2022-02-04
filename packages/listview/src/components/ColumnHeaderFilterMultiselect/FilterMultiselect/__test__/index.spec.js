import React from 'react';
import { mount } from 'enzyme';
import { Application, MultiSelect, Option } from 'react-rainbow-components';
import FilterMultiselect from '..';

jest.mock('react-rainbow-components/components/MultiSelect', () =>
    jest.fn(({ children }) => <>{children}</>),
);

describe('FilterMultiselect', () => {
    it('should render the right placeholder when headerText is passed', () => {
        const wrapper = mount(
            <Application>
                <FilterMultiselect headerText="Test" />
            </Application>,
        );
        expect(wrapper.find(MultiSelect).prop('placeholder')).toBe('Select the Test');
    });

    it('should render the right options', () => {
        const options = [{ value: 'option-1' }, { value: 'option-2' }, { value: 'option-3' }];
        const wrapper = mount(
            <Application>
                <FilterMultiselect options={options} />
            </Application>,
        );
        expect(wrapper.find(Option).length).toBe(3);
    });
});
