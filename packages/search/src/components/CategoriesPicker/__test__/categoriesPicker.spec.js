import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import CategoriesPicker from '..';

describe('<CategoriesPicker />', () => {
    it('should render the label passed', () => {
        const label = <h3>Categories</h3>;
        const wrapper = mount(
            <Application>
                <CategoriesPicker label={label} />
            </Application>,
        );
        const labelElement = wrapper.find('h3');
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.text()).toBe('Categories');
    });

    it('should call onChange with the right value when an option is clicked', () => {
        const onChangeFn = jest.fn();
        const wrapper = mount(
            <Application>
                <CategoriesPicker onChange={onChangeFn} options={['Cat 1', 'Cat 2', 'Cat 3']} />
            </Application>,
        );
        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeFn).toHaveBeenCalledTimes(1);
        expect(onChangeFn).toHaveBeenCalledWith('Cat 1');
    });
});
