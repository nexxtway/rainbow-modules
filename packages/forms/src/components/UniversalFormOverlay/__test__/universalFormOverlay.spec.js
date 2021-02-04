import { mount } from 'enzyme';
import React from 'react';
import { Field } from 'react-final-form';
import { Application, Input } from 'react-rainbow-components';
import UniversalFormOverlay from '..';
import { StyledContainer } from '../styled';

jest.useFakeTimers();
const Fields = () => {
    return <Field name="test" component={Input} />;
};

describe('<UniversalFormOverlay />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });

    it('should render a UniversalForm with the fields passed', () => {
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay triggerElementRef={{}} fields={Fields} isOpen />
            </Application>,
        );
        jest.runAllTimers();
        expect(wrapper.find('UniversalForm').exists()).toBe(true);
        const field = wrapper.find(Field);
        expect(field.exists()).toBe(true);
        expect(field.prop('name')).toBe('test');
    });

    it('should call onOpened when opened', () => {
        const onOpenedFn = jest.fn();
        mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    onOpened={onOpenedFn}
                    isOpen
                />
            </Application>,
        );
        expect(onOpenedFn).toHaveBeenCalledTimes(1);
    });

    it('should render cancelButtonLabel inside cancel button', () => {
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    cancelButtonLabel="Discard"
                    isOpen
                />
            </Application>,
        );
        expect(wrapper.find('Button').first().text()).toBe('Discard');
    });

    it('should render submitButtonLabel inside cancel button', () => {
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    submitButtonLabel="Save"
                    isOpen
                />
            </Application>,
        );
        expect(wrapper.find('Button').at(1).text()).toBe('Save');
    });

    it('should call onRequestClose when cancel button is clicked', () => {
        const onRequestCloseFn = jest.fn();
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    onRequestClose={onRequestCloseFn}
                    isOpen
                />
            </Application>,
        );
        wrapper.find('Button').first().simulate('click');
        expect(onRequestCloseFn).toHaveBeenCalledTimes(1);
    });

    it('should call onRequestClose when ESC key is pressed', () => {
        const onRequestCloseFn = jest.fn();
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    onRequestClose={onRequestCloseFn}
                    isOpen
                />
            </Application>,
        );
        wrapper.find(StyledContainer).simulate('keydown', { key: 'Escape' });
        expect(onRequestCloseFn).toHaveBeenCalledTimes(1);
    });

    it('should call onSubmit when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper = mount(
            <Application>
                <UniversalFormOverlay
                    triggerElementRef={{}}
                    fields={Fields}
                    onSumbit={onSubmitFn}
                    isOpen
                />
            </Application>,
        );
        wrapper.find('form').simulate('submit');
        expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });
});
