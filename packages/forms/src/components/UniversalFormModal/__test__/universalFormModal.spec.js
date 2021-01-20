import React from 'react';
import { mount } from 'enzyme';
import { Field } from 'react-final-form';
import UniversalFormModal from '../index';

describe('<UniversalFormModal />', () => {
    it('should fire onSubmit when the form is submit', () => {
        const onSubmitMock = jest.fn();
        const wrapper = mount(<UniversalFormModal onSubmit={onSubmitMock} isOpen={true} />);
        wrapper.find('form').simulate('submit');
        expect(onSubmitMock).toBeCalled();
    });
    it('should fire onRequestClose when click on close button', () => {
        const onRequestClose = jest.fn();
        const wrapper = mount(<UniversalFormModal onRequestClose={onRequestClose} isOpen={true} />);
        wrapper.find('button').first().simulate('click');
        expect(onRequestClose).toBeCalled();
    });
});
