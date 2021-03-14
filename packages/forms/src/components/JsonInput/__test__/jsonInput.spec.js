import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import JsonInput from '..';
import { ErrorText } from '../styled';

jest.useFakeTimers();

describe('<JsonInput />', () => {
    it('should render the label passed', () => {
        const label = <span data-test="label">Label</span>;
        const wrapper = mount(
            <Application>
                <JsonInput label={label} />
            </Application>,
        );
        expect(wrapper.find('[data-test="label"]').exists()).toBe(true);
    });

    it('should render the error message when passed', () => {
        const wrapper = mount(
            <Application>
                <JsonInput error="Test error" />
            </Application>,
        );
        const errorComponent = wrapper.find(ErrorText);
        expect(errorComponent.exists()).toBe(true);
        expect(errorComponent.text()).toBe('Test error');
    });

    it('should call onFocus when focused', () => {
        const onFocusFn = jest.fn();
        const wrapper = mount(
            <Application>
                <JsonInput onFocus={onFocusFn} />
            </Application>,
        );
        wrapper.find('[role="textbox"]').first().simulate('focus');
        expect(onFocusFn).toHaveBeenCalledTimes(1);
    });

    it('should call onBlur when focus is lost', () => {
        const onBlurFn = jest.fn();
        const wrapper = mount(
            <Application>
                <JsonInput onBlur={onBlurFn} />
            </Application>,
        );
        wrapper.find('[role="textbox"]').first().simulate('blur');
        expect(onBlurFn).toHaveBeenCalledTimes(1);
    });

    it('should call onChange when focus is lost', () => {
        const onChangeFn = jest.fn();
        const wrapper = mount(
            <Application>
                <JsonInput value={{ test: true }} onChange={onChangeFn} />
            </Application>,
        );
        wrapper.find('[role="textbox"]').first().simulate('blur');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
        expect(onChangeFn).toHaveBeenCalledWith({ test: true });
    });
});
