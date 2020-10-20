import React from 'react';
import { mount } from 'enzyme';
import UniversalPicker from '../../UniversalPicker';
import UniversalPickerOption from '../index';

describe('<UniversalPickerOption/>', () => {
    it('should set type radio to the input element', () => {
        const component = mount(
            <UniversalPicker>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('type')).toBe('radio');
    });
    it('should set type checkbox to the input element', () => {
        const component = mount(
            <UniversalPicker multiple>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('type')).toBe('checkbox');
    });
    it('should set correct name to the input element', () => {
        const groupName = 'group-1';
        const component = mount(
            <UniversalPicker name={groupName}>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('name')).toBe(groupName);
    });
    it('should mark the input element as checked when is not multiple', () => {
        const value = 'option1';
        const component = mount(
            <UniversalPicker value={value}>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should mark the input element as checked when is multiple', () => {
        const value = ['option1'];
        const component = mount(
            <UniversalPicker multiple value={value}>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should not mark the input element as checked when is multiple and value passed is not an array', () => {
        const value = 'option1';
        const component = mount(
            <UniversalPicker multiple value={value}>
                <UniversalPickerOption name="option1" />
            </UniversalPicker>,
        );
        expect(component.find('input').prop('checked')).toBe(false);
    });
    it('should be call component with right props', () => {
        const Item = ({ isFocused }) => (isFocused ? 'isFocused' : null);
        const value = 'option1';
        const component = mount(
            <UniversalPicker value={value}>
                <UniversalPickerOption name="option1" component={Item} />
            </UniversalPicker>,
        );
        expect(component.text()).toBe('');
        component.find('input').first().simulate('focus');
        component.update();
        expect(component.text()).toBe('isFocused');
        component.find('input').first().simulate('blur');
        component.update();
        expect(component.text()).toBe('');
    });
});
