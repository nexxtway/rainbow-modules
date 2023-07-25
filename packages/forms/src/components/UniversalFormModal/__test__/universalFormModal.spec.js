import React from 'react';
import { mount } from 'enzyme';
import UniversalFormModal from '../index';

describe('<UniversalFormModal />', () => {
    it('should fire onSubmit when the form is submit', () => {
        const onSubmitMock = jest.fn();
        const wrapper = mount(<UniversalFormModal onSubmit={onSubmitMock} isOpen />);
        wrapper.find('form').simulate('submit');
        expect(onSubmitMock).toBeCalled();
    });
    it('should fire onRequestClose when click on close button', () => {
        const onRequestClose = jest.fn();
        const wrapper = mount(<UniversalFormModal onRequestClose={onRequestClose} isOpen />);
        wrapper.find('button').first().simulate('click');
        expect(onRequestClose).toBeCalled();
    });
    it('should pass the size prop to the underliying modal', () => {
        const wrapper = mount(<UniversalFormModal size="large" isOpen />);
        expect(wrapper.find('Modal').prop('size')).toBe('large');
    });
});
