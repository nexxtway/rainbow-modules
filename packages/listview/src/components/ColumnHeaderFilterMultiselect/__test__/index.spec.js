import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import ColumnHeaderFilterMultiselect from '..';

jest.mock('../../ColumnHeaderFilterText/FilterOverlay', () =>
    jest.fn(({ children }) => <>{children}</>),
);

describe('ColumnHeaderFilterMultiselect', () => {
    it('should call onFilter when the form is submit', () => {
        const onFilterMock = jest.fn();
        const wrapper = mount(
            <Application>
                <ColumnHeaderFilterMultiselect onFilter={onFilterMock} />
            </Application>,
        );
        wrapper.find('form').simulate('submit');
        expect(onFilterMock).toBeCalledTimes(1);
    });
});
