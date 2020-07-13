import React from 'react';
import { Column } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import FirestoreTable from '../../src/components/FirestoreTable';
import app from '../../../../firebase';

export const basicFirestoreTableRealTime = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable collection="books">
                <Column field="id" header="Id" />
                <Column field="data.name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export const basicFirestoreTableFetchOnce = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable collection="books" fetchOnce>
                <Column field="id" header="Id" />
                <Column field="data.name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export const firestoreTablePassingDownProps = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable
                collection="books"
                query={(ref) => ref.where('name', '==', 'Speaking Javascript')}
                fetchOnce
                showRowNumberColumn
            >
                <Column field="id" header="Id" />
                <Column field="data.name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Listview/Stories',
    component: FirestoreTable,
};
