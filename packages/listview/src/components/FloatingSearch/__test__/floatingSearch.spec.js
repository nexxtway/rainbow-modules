import React from 'react';
import { mount } from 'enzyme';
import Search from '../search';

describe('<FloatingSearch />', () => {
    it('should render an input type search and a button', () => {
        const component = mount(<Search />);
        const input = component.find('Input');
        const button = component.find('ButtonIcon');
        expect(input.prop('type')).toBe('search');
        expect(button.exists()).toBe(true);
    });

    it('should render an input with value = a and 2 buttons', () => {
        const component = mount(<Search value="a" />);
        const input = component.find('Input');
        const buttons = component.find('button');
        expect(input.prop('value')).toBe('a');
        expect(buttons.length).toBe(2);
    });

    it('should call onChage with value = b', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<Search value="a" onChange={onChangeMockFn} />);
        const input = component.find('input');
        input.simulate('change', { target: { value: 'b' } });
        expect(onChangeMockFn).toBeCalledWith('b');
    });

    it('should call onRequestClose', () => {
        const onRequestCloseMockFn = jest.fn();
        const component = mount(<Search value="a" onRequestClose={onRequestCloseMockFn} />);
        const buttons = component.find('button');
        buttons.at(1).simulate('click');
        expect(onRequestCloseMockFn.mock.calls.length).toBe(1);
    });

    it('should call onChage with empty string to clear the input', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<Search value="a" onChange={onChangeMockFn} />);
        const buttons = component.find('button');
        buttons.at(0).simulate('mouseDown');
        expect(onChangeMockFn).toBeCalledWith('');
    });
});
