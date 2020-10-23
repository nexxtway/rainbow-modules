import React from 'react';
import { mount } from 'enzyme';
import { Table, Column, Application } from 'react-rainbow-components';
import NavigationButtonColumn from '../index';

describe('<NavigationButtonColumn />', () => {
    const data = [
        {
            name: 'a',
            number: 23,
        },
    ];
    it('should call onClickMockFn when click on the button', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <Application>
                <Table data={data} keyField="name">
                    <Column
                        field="name"
                        header="Name"
                        onClick={onClickMockFn}
                        component={NavigationButtonColumn}
                    />
                </Table>
            </Application>,
        );
        const cellNavigationButtonColumn = component.find('NavigationButtonColumn');
        const button = cellNavigationButtonColumn.find('button');
        button.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
        expect(onClickMockFn).toBeCalledWith({ value: 'a', row: expect.any(Object) });
    });
});
