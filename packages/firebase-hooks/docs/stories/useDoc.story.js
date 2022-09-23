import React from 'react';
import { Table, Column } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import useDoc from '../../src/firestore/useDoc';

const Book = () => {
    const [data, isLoading] = useDoc({
        path: '/books/RoguXc30cdJvA4J7jWDc',
    });
    const tableData = isLoading || !data ? [] : [data];

    return (
        <Table keyField="id" data={tableData} isLoading={isLoading} variant="listview">
            <Column field="data.name" header="Name" />
            <Column field="data.author" header="Author" />
        </Table>
    );
};

export const SubscribeToDoc = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Book />
        </RainbowFirebaseApp>
    );
};
