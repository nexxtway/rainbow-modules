import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import HeaderFilter from '..';
import { StyledContent, StyledHeaderContainer } from '../styled';
import SortArrowIcon from '../../SortArrowIcon';

describe('HeaderFilter', () => {
    it('should set the right title in the content container element when the content passed is a string', () => {
        const component = mount(
            <Application>
                <HeaderFilter header="header content" />
            </Application>,
        );

        expect(component.find(StyledContent).prop('title')).toBe('header content');
    });
    it('should not set any title in the content container element when the content passed is not a string', () => {
        const component = mount(
            <Application>
                <HeaderFilter header={<div />} />
            </Application>,
        );
        expect(component.find(StyledContent).prop('title')).toBe('');
    });
    it('should render the sort icon when sortable is true', () => {
        const component = mount(
            <Application>
                <HeaderFilter sortable />
            </Application>,
        );
        expect(component.find(SortArrowIcon).exists()).toBe(true);
    });
    it('should not render the sort icon when sortable is false', () => {
        const component = mount(
            <Application>
                <HeaderFilter />
            </Application>,
        );
        expect(component.find(SortArrowIcon).exists()).toBe(false);
    });
    it('should call onSort with the right data when the header is clicked and sortable is passed', () => {
        const onSortMockFn = jest.fn();
        const component = mount(
            <Application>
                <HeaderFilter sortable sortDirection="asc" onSort={onSortMockFn} />
            </Application>,
        );
        const header = component.find(StyledHeaderContainer);
        header.simulate('click');
        expect(onSortMockFn).toHaveBeenCalledWith(expect.any(Object), 'asc');
    });
    it('should not call onSort when sortable is not passed', () => {
        const onSortMockFn = jest.fn();
        const component = mount(
            <Application>
                <HeaderFilter sortDirection="asc" onSort={onSortMockFn} />
            </Application>,
        );
        const header = component.find(StyledHeaderContainer);
        header.simulate('click');
        expect(onSortMockFn).not.toHaveBeenCalled();
    });
});
