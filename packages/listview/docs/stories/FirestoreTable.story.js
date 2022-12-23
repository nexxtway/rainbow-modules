import React from 'react';
import { Column } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { query, where, limit } from 'firebase/firestore';
import FirestoreTable from '../../src/components/FirestoreTable';
import app from '../../../../firebase';

export const basicFirestoreTableRealTime = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable collection="books">
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export const basicFirestoreTableFetchOnce = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable collection="books" fetchOnce>
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export const firestoreTablePassingDownProps = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable
                collection="books"
                query={(ref) => query(ref, where('name', '==', 'foo'))}
                fetchOnce
                showRowNumberColumn
            >
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export const firestoreTableWithSortAndQuery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTable
                collection="books"
                fetchOnce
                query={(ref) => query(ref, limit(2))}
                sortedBy="name"
            >
                <Column field="id" header="Id" />
                <Column field="name" header="Name" sortable />
            </FirestoreTable>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Listview/Stories/FirestoreTable',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
