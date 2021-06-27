import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import InputSearch from '..';

describe('<InputSearch />', () => {
    it('should fire onChange event', () => {
        const changeFn = jest.fn();
        const component = mount(
            <Application>
                <InputSearch onChange={changeFn} />
            </Application>,
        );
        component.find('input').simulate('change', { target: { value: 'Test' } });
        expect(changeFn).toHaveBeenCalledWith('Test');
    });

    it('should fire onSearch event', () => {
        const searchFn = jest.fn();
        const component = mount(
            <Application>
                <InputSearch value="Test" onSearch={searchFn} />
            </Application>,
        );
        component.find('input').simulate('keydown', { key: 'Enter' });
        expect(searchFn).toHaveBeenCalledWith('Test');
    });

    it('should clear value when clear button is clicked', () => {
        const changeFn = jest.fn();
        const component = mount(
            <Application>
                <InputSearch value="Test" onChange={changeFn} />
            </Application>,
        );
        component.find('button').simulate('click');
        expect(changeFn).toHaveBeenCalledWith('');
    });
});
