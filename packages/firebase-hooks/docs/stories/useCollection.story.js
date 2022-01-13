import React, { useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column, Select } from 'react-rainbow-components';
import app from '../../../../firebase';
import useCollection from '../../src/firestore/useCollection';

const Books = () => {
    const [data, isLoading] = useCollection({
        path: '/books',
    });

    return (
        <Table keyField="id" data={data} isLoading={isLoading} variant="listview">
            <Column field="data.name" header="Name" />
            <Column field="data.author" header="Author" />
        </Table>
    );
};

const AxeBooks = () => {
    const [data, isLoading] = useCollection({
        path: '/books',
        query: (query) => query.where('author', '==', 'Axel Rauschmayer'),
    });
    return (
        <Table keyField="id" data={data} isLoading={isLoading} variant="listview">
            <Column field="data.name" header="Name" />
            <Column field="data.author" header="Author" />
        </Table>
    );
};

const options = [
    { value: '', label: 'All' },
    { value: 'Reinier Guerra', label: 'Reinier Guerra' },
    { value: 'Leandro Torres', label: 'Leandro Torres' },
    { value: 'Kyle Simpson', label: 'Kyle Simpson' },
];

const selectStyles = {
    maxWidth: '300px',
    marginBottom: '1rem',
};

const FilterBooks = () => {
    const [filterAutor, setFilterAutor] = useState();
    const [sortedBy, setSortedBy] = useState();
    const [sortDirection, setSortDirection] = useState();

    const query = (ref) => {
        let q = ref;
        if (filterAutor) {
            q = q.where('author', '==', filterAutor);
        }
        if (sortedBy) {
            q = q.orderBy(sortedBy, sortDirection);
        }
        return q;
    };

    const [data, isLoading] = useCollection({
        path: '/books',
        query,
        track: [filterAutor, sortedBy, sortDirection],
    });

    const handleChange = (event) => {
        setFilterAutor(event.target.value);
    };

    const handleSort = (event, field, nextSortDirection) => {
        const normalizedField = field.split('.')[1];
        setSortedBy(normalizedField);
        setSortDirection(nextSortDirection);
    };

    return (
        <>
            <Select
                label="Filter by author"
                value={filterAutor}
                onChange={handleChange}
                options={options}
                labelAlignment="left"
                style={selectStyles}
            />
            <Table
                keyField="id"
                data={data}
                isLoading={isLoading}
                variant="listview"
                onSort={handleSort}
                sortDirection={sortDirection}
                sortedBy={`data.${sortedBy}`}
            >
                <Column field="data.name" header="Name" sortable />
                <Column field="data.author" header="Author" sortable />
            </Table>
        </>
    );
};

export const subcribeToCollection = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Books />
        </RainbowFirebaseApp>
    );
};

export const subcribeToCollectionApplyingQuery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <AxeBooks />
        </RainbowFirebaseApp>
    );
};

export const subcribeToCollectionTrack = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FilterBooks />
        </RainbowFirebaseApp>
    );
};
