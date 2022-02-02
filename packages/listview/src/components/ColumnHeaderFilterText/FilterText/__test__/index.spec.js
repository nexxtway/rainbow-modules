import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import FilterText from '..';
import { StyledIconPlus, StyledInput, StyledOr } from '../styled';

describe('FilterText', () => {
    it('should not render the "or" and remove button when filters is empty', () => {
        const component = mount(
            <Application>
                <FilterText />
            </Application>,
        );
        expect(component.find(StyledOr).exists()).toBe(false);
        expect(component.find(TrashFilled).exists()).toBe(false);
    });
    it('should render one "or" and two remove button when filters is an array with two elements', () => {
        const component = mount(
            <Application>
                <FilterText filters={['bar', 'foo']} />
            </Application>,
        );
        expect(component.find(StyledOr).length).toBe(1);
        expect(component.find(TrashFilled).length).toBe(2);
    });
    it('should call onChange with right value when click in add value', () => {
        const onChangeMock = jest.fn();
        const component = mount(
            <Application>
                <FilterText onChange={onChangeMock} />
            </Application>,
        );
        component.find(StyledIconPlus).simulate('click');
        expect(onChangeMock).toBeCalledWith(['', '']);
    });
    it('should call onChange with right value when click in remove', () => {
        const onChangeMock = jest.fn();
        const component = mount(
            <Application>
                <FilterText filters={['bar', 'foo']} onChange={onChangeMock} />
            </Application>,
        );
        component.find(TrashFilled).first().simulate('click');
        expect(onChangeMock).toBeCalledWith(['foo']);
    });
    it('should call onChange with right value when change input value', () => {
        const onChangeMock = jest.fn();
        const component = mount(
            <Application>
                <FilterText onChange={onChangeMock} />
            </Application>,
        );
        component.find('input').simulate('change', { target: { value: 'foo' } });
        expect(onChangeMock).toBeCalledWith(['foo']);
    });
    it('should render the right placeholder when headerText is passed', () => {
        const component = mount(
            <Application>
                <FilterText headerText="Test" />
            </Application>,
        );
        expect(component.find(StyledInput).first().prop('placeholder')).toBe('Find Test');
    });
});
