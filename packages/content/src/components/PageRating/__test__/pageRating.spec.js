import { mount } from 'enzyme';
import React from 'react';
import { Application } from 'react-rainbow-components';
import PageRating from '..';
import Option from '../option';

describe('<PageRating />', () => {
    it('should fire onChange with the right value when clicked', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Application>
                <PageRating onChange={onChangeFn} />
            </Application>,
        );
        component
            .find('input')
            .first()
            .simulate('change', { target: { checked: true, value: 'sad' } });
        expect(onChangeFn).toHaveBeenCalledWith('sad');
    });

    it('should select the correct option according to value', () => {
        const component = mount(
            <Application>
                <PageRating value="happy" />
            </Application>,
        );
        expect(component.find(Option).last().prop('isSelected')).toBe(true);
    });

    it('should not select any option when value is undefined', () => {
        const component = mount(
            <Application>
                <PageRating />
            </Application>,
        );
        const options = component.find(Option);
        options.forEach((option) => {
            expect(option.prop('isSelected')).toBe(false);
        });
    });
});
