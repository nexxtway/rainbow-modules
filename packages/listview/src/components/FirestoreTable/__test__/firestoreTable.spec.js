import React from 'react';
import { mount } from 'enzyme';
import { Table } from 'react-rainbow-components';
import FirestoreTable from '../index';

jest.mock('react-rainbow-components/components/Table', () => jest.fn());

describe('<FirestoreTable />', () => {
    it('should pass down props to <Table/> component', () => {
        Table.mockReturnValue(<span />);
        mount(<FirestoreTable collection="books" showRowNumberColumn />);
        expect(Table).toBeCalledWith(expect.objectContaining({ showRowNumberColumn: true }), {});
    });
});
