import { mount } from 'enzyme';
import React from 'react';
import { Application, LoadingShape } from 'react-rainbow-components';
import VirtualizedTable, { Column } from '..';
import { StyledEmptyContainer, StyledRow } from '../styled';

describe('<VirtualizedTable />', () => {
    it('should render the data passed', () => {
        const data = {
            initialData: [
                {
                    name: 'Test 1',
                },
                {
                    name: 'Test 2',
                },
            ],
        };
        const component = mount(
            <Application>
                <VirtualizedTable data={data}>
                    <Column field="name" />
                </VirtualizedTable>
            </Application>,
        );
        expect(component.find(StyledRow).length).toBe(2);
        expect(component.find(StyledRow).at(0).text()).toBe('Test 1');
        expect(component.find(StyledRow).at(1).text()).toBe('Test 2');
    });

    it('should render a LoadingShape when isLoading is true', () => {
        const component = mount(
            <Application>
                <VirtualizedTable isLoading data={[]}>
                    <Column field="name" />
                </VirtualizedTable>
            </Application>,
        );
        expect(component.find(LoadingShape).exists()).toBe(true);
    });

    it('should render a empty container when table is empty', () => {
        const component = mount(
            <Application>
                <VirtualizedTable />
            </Application>,
        );
        expect(component.find(StyledEmptyContainer).exists()).toBe(true);
    });
});
