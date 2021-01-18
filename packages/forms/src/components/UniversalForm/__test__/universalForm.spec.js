import React from 'react';
import { mount } from 'enzyme';
import { Field } from 'react-final-form';
import UniversalForm from '../index';

describe('<UniversalForm />', () => {
    it('should fire onSubmit when the form is submit', () => {
        const onSubmitMock = jest.fn();
        const wrapper = mount(<UniversalForm onSubmit={onSubmitMock} />);
        wrapper.find('form').simulate('submit');
        expect(onSubmitMock).toBeCalled();
    });
    it('should render initial values in the input', () => {
        const wrapper = mount(
            <UniversalForm initialValues={{ name: 'Max' }}>
                <Field name="name" component="input" placeholder="Name" />
            </UniversalForm>,
        );
        expect(wrapper.find('input').prop('value')).toBe('Max');
    });
});
