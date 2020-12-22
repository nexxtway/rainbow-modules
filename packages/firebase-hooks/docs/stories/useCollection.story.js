import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column } from 'react-rainbow-components';
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

export default {
    title: 'Modules|firebase-hooks/Stories',
};
