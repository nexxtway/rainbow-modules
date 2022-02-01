/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';
import ColumnHeaderFilterMultiselect from '../../src/components/ColumnHeaderFilterMultiselect';
import { dataTable } from './data/batchActionsBar';

const Container = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: fit-content;
`;

const StyledStatus = styled.div`
    text-transform: capitalize;
    color: #fff;
    background-color: #f2707a;
    padding-left: 10px;
`;

const CreatedAt = ({ value }) =>
    new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).format(value);

const Status = ({ value }) => <StyledStatus>{value}</StyledStatus>;

export const BasicColumnHeaderFilterMultiselect = () => {
    return (
        <Application>
            <Container>
                <Table data={dataTable} keyField="id" variant="listview">
                    <Column header="Id" field="id" />
                    <Column header="Name" field="name" />
                    <Column
                        header="Company"
                        field="company"
                        headerComponent={ColumnHeaderFilterMultiselect}
                        sortable
                    />
                    <Column header="Status" field="status" component={Status} />
                    <Column header="Created At" field="createdAt" component={CreatedAt} />
                </Table>
            </Container>
        </Application>
    );
};

export const HandleColumnHeaderFilterMultiselect = () => {
    const [filters, setFilters] = useState([]);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState();

    const filteredData = useMemo(() => {
        if (filters.length > 0) {
            return dataTable.filter((item) => {
                return filters.some((word) => item.company === word);
            });
        }
        return dataTable;
    }, [filters]);

    const sortedData = useMemo(() => {
        const newData = [...filteredData];
        const key = (value) => value[sortedBy];
        const reverse = sortDirection === 'asc' ? 1 : -1;

        return newData.sort((aItem, bItem) => {
            const aValue = key(aItem);
            const bValue = key(bItem);
            return reverse * ((aValue > bValue) - (bValue > aValue));
        });
    }, [filteredData, sortDirection, sortedBy]);

    const handleSort = (_event, field, nextSortDirection) => {
        setSortedBy(field);
        setSortDirection(nextSortDirection);
    };

    const options = [
        { name: 'Nexxtway', label: 'Nexxtway', value: 'Nexxtway' },
        { name: 'Google', label: 'Google', value: 'Google' },
        { name: 'Oracle', label: 'Oracle', value: 'Oracle' },
        { name: 'nexxtway', label: 'nexxtway', value: 'nexxtway' },
    ];

    return (
        <Application>
            <Container>
                <Table
                    data={sortedData}
                    keyField="id"
                    onSort={handleSort}
                    sortDirection={sortDirection}
                    sortedBy={sortedBy}
                    variant="listview"
                >
                    <Column header="Id" field="id" />
                    <Column header="Name" field="name" sortable />
                    <Column
                        header="Company"
                        field="company"
                        options={options}
                        headerComponent={ColumnHeaderFilterMultiselect}
                        onFilter={setFilters}
                        sortable
                    />
                    <Column header="Status" field="status" component={Status} />
                    <Column header="Created At" field="createdAt" component={CreatedAt} />
                </Table>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/ColumnHeaderFilterMultiselect',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
