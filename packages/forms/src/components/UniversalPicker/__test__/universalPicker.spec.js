import React from 'react';
import { mount } from 'enzyme';
import UniversalPicker from '../index';
import UniversalPickerOption from '../../UniversalPickerOption';

describe('<UniversalPicker/>', () => {
    it('should call onChanged with string value', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <UniversalPicker onChange={onChangeFn}>
                <UniversalPickerOption name="option1" />
                <UniversalPickerOption name="option2" />
                <UniversalPickerOption name="option3" />
            </UniversalPicker>,
        );
        component.find('UniversalPickerOption[name="option2"]').find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledWith('option2');
    });
    it('should call onChanged with array of names', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <UniversalPicker onChange={onChangeFn} multiple value={['option1']}>
                <UniversalPickerOption name="option1" />
                <UniversalPickerOption name="option2" />
                <UniversalPickerOption name="option3" />
            </UniversalPicker>,
        );
        component
            .find('UniversalPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: true } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option3']);
    });
    it('should call onChanged with the new option selected when have it has one selected initially', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <UniversalPicker onChange={onChangeFn} value="option1">
                <UniversalPickerOption name="option1" />
                <UniversalPickerOption name="option2" />
                <UniversalPickerOption name="option3" />
            </UniversalPicker>,
        );
        component
            .find('UniversalPickerOption[name="option3"]')
            .find('input[type="radio"]')
            .simulate('change');
        expect(onChangeFn).toHaveBeenCalledWith('option3');
    });
    it('should call onChanged with the right options when is multiple and the initial value is not an array', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <UniversalPicker onChange={onChangeFn} multiple value={undefined}>
                <UniversalPickerOption name="option1" />
                <UniversalPickerOption name="option2" />
                <UniversalPickerOption name="option3" />
            </UniversalPicker>,
        );
        component
            .find('UniversalPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: true } });
        expect(onChangeFn).toHaveBeenCalledWith(['option3']);
    });
    it('should call onChanged with the right options when is multiple, have values selected initially and deselect one', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <UniversalPicker onChange={onChangeFn} multiple value={['option1', 'option3']}>
                <UniversalPickerOption name="option1" />
                <UniversalPickerOption name="option2" />
                <UniversalPickerOption name="option3" />
            </UniversalPicker>,
        );
        component
            .find('UniversalPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: false } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1']);
    });
});
