/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';
import ColumnHeaderFilterText from '../../src/components/ColumnHeaderFilterText';
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

export const BasicColumnHeaderFilterText = () => {
    return (
        <Application>
            <Container>
                <Table data={dataTable} keyField="id" variant="listview">
                    <Column header="Id" field="id" />
                    <Column header="Name" field="name" headerComponent={ColumnHeaderFilterText} />
                    <Column header="Company" field="company" sortable />
                    <Column header="Status" field="status" component={Status} />
                    <Column header="Created At" field="createdAt" component={CreatedAt} />
                </Table>
            </Container>
        </Application>
    );
};

export const HandleColumnHeaderFilterText = () => {
    const [filters, setFilters] = useState([]);
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState();

    const filteredData = useMemo(() => {
        if (filters.length > 0) {
            return dataTable.filter((item) => {
                return filters.some((word) => {
                    const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                    return regex.test(item.name);
                });
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
                    <Column
                        header="Name"
                        field="name"
                        sortable
                        headerComponent={ColumnHeaderFilterText}
                        onFilter={setFilters}
                    />
                    <Column header="Company" field="company" sortable />
                    <Column header="Status" field="status" component={Status} />
                    <Column header="Created At" field="createdAt" component={CreatedAt} />
                </Table>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/ColumnHeaderFilterText',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
