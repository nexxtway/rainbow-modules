import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column } from 'react-rainbow-components';
import app from '../../../../firebase';
import useCollectionOnce from '../../src/firestore/useCollectionOnce';

const Books = () => {
    const [data, isLoading] = useCollectionOnce({
        path: '/books',
    });
    return (
        <Table keyField="id" data={data} isLoading={isLoading} variant="listview">
            <Column field="data.name" header="Name" />
            <Column field="data.author" header="Author" />
        </Table>
    );
};

export const UseCollectionOnce = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Books />
        </RainbowFirebaseApp>
    );
};
