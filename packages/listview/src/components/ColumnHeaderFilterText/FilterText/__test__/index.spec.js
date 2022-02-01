import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import FilterText from '..';
import { StyledIconPlus, StyledInput, StyledOr } from '../styled';

describe('FilterText', () => {
    it('should not render the "or" and remove button when defaultFilter is empty', () => {
        const component = mount(
            <Application>
                <FilterText />
            </Application>,
        );
        expect(component.find(StyledOr).exists()).toBe(false);
        expect(component.find(TrashFilled).exists()).toBe(false);
    });
    it('should render one "or" and two remove button when defaultFilter is an array with two elements', () => {
        const component = mount(
            <Application>
                <FilterText defaultFilters={['bar', 'foo']} />
            </Application>,
        );
        expect(component.find(StyledOr).length).toBe(1);
        expect(component.find(TrashFilled).length).toBe(2);
    });
    it('should render two input element when click in add value', () => {
        const component = mount(
            <Application>
                <FilterText />
            </Application>,
        );
        expect(component.find(StyledInput).length).toBe(1);
        component.find(StyledIconPlus).simulate('click');
        expect(component.find(StyledInput).length).toBe(2);
    });
    it('should render one input element when click in remove', () => {
        const component = mount(
            <Application>
                <FilterText defaultFilters={['bar', 'foo']} />
            </Application>,
        );
        expect(component.find(StyledInput).length).toBe(2);
        component.find(TrashFilled).first().simulate('click');
        expect(component.find(StyledInput).length).toBe(1);
    });
    it('should render the right placeholder when headerText is passed', () => {
        const component = mount(
            <Application>
                <FilterText headerText="Test" />
            </Application>,
        );
        expect(component.find(StyledInput).first().prop('placeholder')).toBe('Find Test');
    });
    it('should call onFilter when the form is submit', () => {
        const onFilterMock = jest.fn();
        const component = mount(
            <Application>
                <FilterText onFilter={onFilterMock} />
            </Application>,
        );
        component.find('form').simulate('submit');
        expect(onFilterMock).toBeCalledTimes(1);
    });
});
